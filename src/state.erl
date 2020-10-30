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
-include_lib("players.hrl").
-import(utils, [log/1, log/2]).

%% API
-export([
	start/0,
	stop/0,
	add/1,
	remove/0,
	update/2,
	init/1,
	handle_call/3,
	handle_info/2,
	handle_cast/2
]).

start() ->
	gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

stop() ->
	gen_server:call(?MODULE, stop).

add(Name) ->
	gen_server:call(?MODULE, {add, Name}).

remove() ->
	gen_server:call(?MODULE, {remove}).

update(Events, CancelEvents) ->
	gen_server:call(?MODULE, {update, Events, CancelEvents}).


init([]) ->
	timer:send_interval(1000, tick),
	{ok,
		{
			{players, maps:new()},
			{sprites, []}}
	}.

handle_info(tick, State) ->
	{{players, Players}, S} = State,
	NewPlayers = players:players_do(Players),
	players:broadcast(NewPlayers),
	{noreply, {{players, NewPlayers}, S}}.

handle_call({add, Name}, {Pid, _Tag}, State) ->
	{{players, P}, S} = State,
	PP = P#{Pid => #{
		x => 100,
		y => 100,
		name => Name,
		status => []
	}},
	{reply, ok, {{players, PP}, S}};

handle_call({remove}, {Pid, _Tag}, State) ->
	{{players, P}, S} = State,
	PP = maps:remove(Pid, P),
	{reply, ok, {{players, PP}, S}};

handle_call({update, Events, _CancelEvents}, {Pid, _Tag}, State) ->
	{{players, Players}, S} = State,
	#{Pid := Player} = Players,
	NewPlayers = Players#{Pid := Player#{status := Events}},
	{reply, ok, {{players, NewPlayers}, S}}.

handle_cast(_Msg, State) ->
	{noreply, State}.