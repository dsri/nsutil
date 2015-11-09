var CONN = {};

var AF_INET     = CONN.AF_INET     = 2;
var AF_INET6    = CONN.AF_INET6    = 10;
var AF_UNIX     = CONN.AF_UNIX     = 1;
var SOCK_STREAM = CONN.SOCK_STREAM = 1;
var SOCK_DGRAM  = CONN.SOCK_DGRAM  = 2;

var CONN_FAMILY_STR = {
    '1':  'AF_UNIX',
    '2':  'AF_INET',
    '10': 'AF_INET6'
};

var CONN_TYPE_STR = {
    '1': 'SOCK_STREAM',
    '2': 'SOCK_DGRAM'
};

var CONN_FAMILY_AND_TYPE = {
    all:   [ [ AF_INET, AF_INET6, AF_UNIX ], [ SOCK_STREAM, SOCK_DGRAM ] ],
    tcp:   [ [ AF_INET, AF_INET6 ],          [ SOCK_STREAM ] ],
    tcp4:  [ [ AF_INET ],                    [ SOCK_STREAM ] ],
    tcp6:  [ [ AF_INET6 ],                   [ SOCK_STREAM ] ],
    udp:   [ [ AF_INET, AF_INET6 ],          [ SOCK_DGRAM ] ],
    udp4:  [ [ AF_INET ],                    [ SOCK_DGRAM ] ],
    udp6:  [ [ AF_INET6 ],                   [ SOCK_DGRAM ] ],
    inet:  [ [ AF_INET, AF_INET6 ],          [ SOCK_STREAM, SOCK_DGRAM ] ],
    inet4: [ [ AF_INET ],                    [ SOCK_STREAM, SOCK_DGRAM ] ],
    inet6: [ [ AF_INET6 ],                   [ SOCK_STREAM, SOCK_DGRAM ] ],
    unix:  [ [ AF_UNIX ],                    [ SOCK_STREAM, SOCK_DGRAM ] ]
};


var STATUS_RUNNING      = "running";
var STATUS_SLEEPING     = "sleeping";
var STATUS_DISK_SLEEP   = "disk-sleep";
var STATUS_STOPPED      = "stopped";
var STATUS_TRACING_STOP = "tracing-stop";
var STATUS_ZOMBIE       = "zombie";
var STATUS_DEAD         = "dead";
var STATUS_WAKE_KILL    = "wake-kill";
var STATUS_WAKING       = "waking";
var STATUS_IDLE         = "idle";  //# BSD
var STATUS_LOCKED       = "locked";  //# BSD
var STATUS_WAITING      = "waiting";  //# BSD

var CONN_ESTABLISHED = "ESTABLISHED";
var CONN_SYN_SENT    = "SYN_SENT";
var CONN_SYN_RECV    = "SYN_RECV";
var CONN_FIN_WAIT1   = "FIN_WAIT1";
var CONN_FIN_WAIT2   = "FIN_WAIT2";
var CONN_TIME_WAIT   = "TIME_WAIT";
var CONN_CLOSE       = "CLOSE";
var CONN_CLOSE_WAIT  = "CLOSE_WAIT";
var CONN_LAST_ACK    = "LAST_ACK";
var CONN_LISTEN      = "LISTEN";
var CONN_CLOSING     = "CLOSING";
var CONN_NONE        = "NONE";

var TCP_STATUSES = {
    4: CONN_ESTABLISHED,
    2: CONN_SYN_SENT,
    3: CONN_SYN_RECV,
    6: CONN_FIN_WAIT1,
    9: CONN_FIN_WAIT2,
   10: CONN_TIME_WAIT,
    0: CONN_CLOSE,
    5: CONN_CLOSE_WAIT,
    8: CONN_LAST_ACK,
    1: CONN_LISTEN,
    7: CONN_CLOSING,
    none: CONN_NONE
};

var PROC_STATUSES = {
    1: STATUS_IDLE,
    2: STATUS_RUNNING,
    3: STATUS_SLEEPING,
    4: STATUS_STOPPED,
    5: STATUS_ZOMBIE
};

var TCP_STATUSES_LINUX = {
    '01': CONN_ESTABLISHED,
    '02': CONN_SYN_SENT,
    '03': CONN_SYN_RECV,
    '04': CONN_FIN_WAIT1,
    '05': CONN_FIN_WAIT2,
    '06': CONN_TIME_WAIT,
    '07': CONN_CLOSE,
    '08': CONN_CLOSE_WAIT,
    '09': CONN_LAST_ACK,
    '0A': CONN_LISTEN,
    '0B': CONN_CLOSING,
    none: CONN_NONE
};

var PROC_STATUSES_LINUX = {
    R: STATUS_RUNNING,
    S: STATUS_SLEEPING,
    D: STATUS_DISK_SLEEP,
    T: STATUS_STOPPED,
    t: STATUS_TRACING_STOP,
    Z: STATUS_ZOMBIE,
    X: STATUS_DEAD,
    x: STATUS_DEAD,
    K: STATUS_WAKE_KILL,
    W: STATUS_WAKING
};

// 准备废弃
function usagePercent(used, total, round) {

    var percent = used / total * 100;

    if (round) {
        percent.toFixed(round);
    }

    return percent;

}

exports.CONN = CONN;
exports.CONN_FAMILY_STR = CONN_FAMILY_STR;
exports.CONN_TYPE_STR = CONN_TYPE_STR;
exports.CONN_FAMILY_AND_TYPE = CONN_FAMILY_AND_TYPE;
exports.TCP_STATUSES = TCP_STATUSES;
exports.PROC_STATUSES = PROC_STATUSES;
exports.TCP_STATUSES_LINUX = TCP_STATUSES_LINUX;
exports.PROC_STATUSES_LINUX = PROC_STATUSES_LINUX;
exports.usagePercent = usagePercent;


