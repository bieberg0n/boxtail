-record(player, {
	x = 100 :: integer(),
	y = 100 :: integer(),
	name :: string(),
	status = [] :: [atom()]
}).

-type player() :: #{x => integer(), y => integer(), name => string(), status => [atom()]}.
-type players() :: #{pid() => player()}.