-module(erws_handler).
-behavior(cowboy_handler).

-import(utils, [log/1, log/2, bins_to_atoms/1]).

%% API
-export([
	init/2,
	websocket_init/1,
	websocket_handle/2,
	websocket_info/2,
	terminate/3
]).

init(Req, Opts) ->
	{cowboy_websocket, Req, Opts, #{idle_timeout => infinity}}.


websocket_init(State) ->
	state:add(anonymous),
	{ok, State}.

websocket_handle({text, DataRaw}, State) ->
	Data = jsone:decode(DataRaw),
	log("events: ~p~n", [Data]),
	lists:map(fun(Key) -> state:update(binary_to_atom(Key, utf8), maps:get(Key, Data)) end, maps:keys(Data)),
	{ok, State}.


websocket_info({text, Msg}, State) ->
	{reply, {text, Msg}, State}.


terminate(_Reason, _PartialReq, _State) ->
	io:format("disconnect~n"),
	state:remove(),
	ok.
