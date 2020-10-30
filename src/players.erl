%%%-------------------------------------------------------------------
%%% @author bj
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 31. 10月 2020 上午12:15
%%%-------------------------------------------------------------------
-module(players).
-author("bj").

-include_lib("players.hrl").
-import(utils, [log/1, log/2, json_encode/1]).

%% API
-export([
	players_do/1,
	broadcast/1
]).


-spec player_do_status(player(), atom()) -> player().
player_do_status(P, right) ->
	#{x := X} = P,
	P#{x := X + 15};
player_do_status(P, left) ->
	#{x := X} = P,
	P#{x := X - 15};
player_do_status(P, undefined) ->
	P;
player_do_status(P, Status) ->
	log("player unknown status: ~p~n", [Status]),
	P.

-spec player_do(player(), [atom()]) -> player().
player_do(P, []) ->
	P;
player_do(P, [H|T]) ->
	NewP = player_do_status(P, H),
	player_do(NewP, T).

-spec player_do(player()) -> player().
player_do(P) ->
	#{status := Status} = P,
	player_do(P, Status).

-spec players_do(players(), [pid()], players()) -> players().
players_do(Players, [PlayerPid|PlayerPids], NewPlayers) ->
	#{PlayerPid := Player} = Players,
	NewPlayer = player_do(Player),
	players_do(Players, PlayerPids, NewPlayers#{PlayerPid => NewPlayer});
players_do(_Players, [], NewPlayers) ->
	NewPlayers.

-spec players_do(players()) -> players().
players_do(Players) ->
	players_do(Players, maps:keys(Players), maps:new()).

-spec broadcast(players()) -> ok.
broadcast(Players) ->
	Pids = maps:keys(Players),
	PlayersData = maps:values(Players),
	lists:map(fun(Pid) -> Pid ! {text, json_encode(PlayersData)} end, Pids),
	ok.