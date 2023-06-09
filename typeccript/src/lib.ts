import { Socket } from 'nanomsg';
import * as protobuf from 'protobufjs';
import { wcf } from './wcf.proto';

const DEFAULT_URL = 'tcp://127.0.0.1:10086';
const LISTEN_URL = 'tcp://127.0.0.1:10087';

export interface UserInfo {
    wxid: string;
    name: string;
    mobile: string;
    home: string;
}

export class Client {
    private cmdSocket: Socket;
    private listening: boolean;
    private enableAcceptFriend: boolean;
    private recv_socket: Socket;

    public static open(): Client {
        let socket = new Socket('pair');
        let num = socket.connect(DEFAULT_URL);
        console.log(num, 'connected:', socket.connected);
        return new Client(socket);
    }

    constructor(cmdSocket: Socket) {
        this.cmdSocket = cmdSocket;
    }

    sendCmd() {
        return new Promise((resolve, reject) => {
            let req = wcf.Request.fromObject({ func: 'FUNC_IS_LOGIN', msg: Node });
            let bf = wcf.Request.encode(req).finish();
            let num = this.cmdSocket.send(bf as Buffer);
            console.log('send rum: ', num);
            this.cmdSocket.once('data', function (buf) {
                resolve(buf);
            });
        });
    }
}

if (require.main === module) {
    let client = Client.open();
    client.sendCmd();
}

// #[derive(Clone, Debug)]
// pub struct Client {
//     pub cmd_socket: nng::Socket,
//     pub listening: bool,
//     pub enable_accept_firend: bool,
//     pub recv_socket: Option<nng::Socket>,
// }
