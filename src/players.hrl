-record(player, {
	x = 100 :: integer(),
	y = 100 :: integer(),
	name :: string(),
	status = [] :: [atom()]
}).

-type direction() :: left | right | up | down.

-type player() :: #{x => integer(), y => integer(), name => string(), role => atom(), status => [atom()], direction => direction()}.

-type players() :: #{pid() => player()}.