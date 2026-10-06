export interface WsServerInfo {
  endpoint: string;
  encrypt: boolean;
  protocol: string;
  pingInterval: number;
  pingTimeout: number;
}

export interface WsConnectionInfo {
  token: string;
  instanceServers: WsServerInfo[];
}

/** Currency detail from v5 `account` WS push */
export interface WsV5AccountDetail {
  currency: string;
  equity?: string;
  available?: string;
  available_margin?: string;
  profit_unreal?: string;
  initial_margin?: string;
  maintenance_margin?: string;
  maintenance_margin_rate?: string;
  initial_margin_rate?: string;
  voucher?: string;
  voucher_value?: string;
  created_time?: string;
  updated_time?: string;
  isolated_equity?: string;
  isolated_profit_unreal?: string;
  withdraw_available?: string;
}

/** Data object from v5 `account` WS push */
export interface WsV5AccountData {
  state?: string;
  equity?: string;
  initial_margin?: string;
  maintenance_margin?: string;
  maintenance_margin_rate?: string;
  profit_unreal?: string;
  available_margin?: string;
  voucher_value?: string;
  created_time?: string;
  updated_time?: string;
  version?: number | string;
  details?: WsV5AccountDetail[];
}

/** Order item from v5 `match_orders.$contract_code` WS push */
export interface WsV5MatchOrder {
  volume?: string;
  trade_volume?: string;
  cancel_volume?: string;
}

/** Tick from spot `market.$symbol.fullDepth.$type` (includes RPI) */
export interface WsSpotFullDepthTick {
  bids?: [number, number][];
  asks?: [number, number][];
  version?: number;
  ts?: number;
}

/** Tick from USDT-M `market.$contract_code.full_depth.$type` (includes RPI orders) */
export interface WsLinearSwapFullDepthTick {
  mrid?: number;
  id?: number;
  bids?: [number, number][];
  asks?: [number, number][];
  ts?: number;
  version?: number;
  ch?: string;
}

/** Trade from USDT-M `market.$contract_code.trade.detail` (sub and req) */
export interface WsLinearSwapTradeDetail {
  id?: number;
  price?: number | string;
  amount?: number | string;
  direction?: string;
  ts?: number;
  quantity?: number | string;
  trade_turnover?: number | string;
  /** Whether the trade involved an RPI order */
  is_rpi_trade?: boolean | number | string;
}
