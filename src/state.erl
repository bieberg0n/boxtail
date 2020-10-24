%%%-------------------------------------------------------------------
%%% @author bj
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 22. 10月 2020 下午11:28
%%%-------------------------------------------------------------------
-module(state).
-author("bj").

-behavior(gen_server).

%% API
-export([
	start/0,
	stop/0,
	add/1,
	remove/1,
	broadcast/1,
	init/1,
	handle_call/3,
	handle_info/2,
	handle_cast/2
]).

start() ->
	gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

stop() ->
	gen_server:call(?MODULE, stop).

add(Who) ->
	gen_server:call(?MODULE, {add, Who}).

remove(Who) ->
	gen_server:call(?MODULE, {remove, Who}).

broadcast(Msg) ->
	gen_server:call(?MODULE, {broadcast, Msg}).

init([]) ->
	timer:send_interval(1000, {broadcast, "test"}),
	{ok, []}.


handle_info({broadcast, Msg}, L) ->
	io:format("broad: ~p~p~n", [Msg, L]),
	lists:map(fun({Pid, _Name}) -> Pid ! {text, Msg} end, L),
	{noreply, L}.


handle_call({add, Who}, _From, L) ->
	{reply, ok, [Who | L]};

handle_call({remove, Who}, _From, L) ->
	{reply, ok, L -- [Who]};

handle_call({broadcast, Msg}, _From, L) ->
	io:format("broad: ~p~p~n", [Msg, L]),
	lists:map(fun(P) -> P ! Msg end, L),
	{reply, ok, L}.

handle_cast(_Msg, State) ->
	{noreply, State}.