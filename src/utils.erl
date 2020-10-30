%%%-------------------------------------------------------------------
%%% @author bj
%%% @copyright (C) 2020, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 30. 10月 2020 下午8:12
%%%-------------------------------------------------------------------
-module(utils).
-author("bj").

%% API
-export([
	log/1,
	log/2,
	bins_to_atoms/1,
	json_encode/1
]).

-type format() :: atom() | string() | binary().

-spec log(Format) -> ok when Format :: format().
log(String)->
	io:format(String).

-spec log(Format, Data) -> 'ok' when Format :: format(), Data :: [term()].
log(Format, Datas) ->
	io:format(Format, Datas).

-spec bins_to_atoms([binary()]) -> [atom()].
bins_to_atoms(Bins) ->
	[binary_to_atom(B, utf8) || B <- Bins].

-spec json_encode(any()) -> string().
json_encode(Data) ->
	J = jsone:encode(Data, [{object_key_type, scalar}]),
	binary_to_list(J).