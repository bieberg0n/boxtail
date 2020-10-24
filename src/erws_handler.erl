-module(erws_handler).
-behavior(cowboy_handler).

%% API
-export([
	init/2,
	websocket_init/1,
	websocket_handle/2,
	websocket_info/2,
	terminate/3
]).

init(Req, Opts) ->
	{cowboy_websocket, Req, Opts}.


websocket_init(State) ->
	%%  erlang:start_timer(1000, self(), <<"Hello!">>),
	state:add({self(), "BJ"}),
	{ok, State}.


websocket_handle({text, Msg}, State) ->
	io:format("~p~n", [Msg]),
	{ok, State}.


websocket_info({text, Msg}, State) ->
	{reply, {text, Msg}, State}.


terminate(_Reason, _PartialReq, _State) ->
	io:format("terminate~n"),
	state:remove({self(), "BJ"}),
	ok.
