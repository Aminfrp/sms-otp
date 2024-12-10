export type SmsMessage = {
  _id: number;
  thread_id: number;
  address: string;
  date: number;
  date_sent: number;
  protocol: number;
  read: number;
  status: number;
  type: number;
  reply_path_present: number;
  body: string;
  service_center: string;
  locked: number;
  error_code: number;
  seen: number;
  timed: number;
  deleted: number;
  sync_state: number;
  marker: number;
  bind_id: number;
  mx_status: number;
  out_time: number;
  sim_id: number;
  block_type: number;
  advanced_seen: number;
  b2c_ttl: number;
  fake_cell_type: number;
  url_risky_type: number;
  favorite_date: number;
};

export type SmsReceive = {
  body: string;
  originatingAddress: string;
  timestamp: number;
};
