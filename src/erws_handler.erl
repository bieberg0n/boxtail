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
	state:add(<<"BJ">>),
	{ok, State}.

websocket_handle({text, DataRaw}, State) ->
	Data = jsone:decode(DataRaw),
	#{<<"e">> := Events, <<"ce">> := CancelEvents} = Data,
	log("events: ~p, ~p~n", [Events, CancelEvents]),
	state:update(bins_to_atoms(Events), bins_to_atoms(CancelEvents)),
	{ok, State}.


websocket_info({text, Msg}, State) ->
	{reply, {text, Msg}, State}.


terminate(_Reason, _PartialReq, _State) ->
	io:format("disconnect~n"),
	state:remove(),
	ok.
