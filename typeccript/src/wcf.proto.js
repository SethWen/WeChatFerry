/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const wcf = $root.wcf = (() => {

    /**
     * Namespace wcf.
     * @exports wcf
     * @namespace
     */
    const wcf = {};

    /**
     * Functions enum.
     * @name wcf.Functions
     * @enum {number}
     * @property {number} FUNC_RESERVED=0 FUNC_RESERVED value
     * @property {number} FUNC_IS_LOGIN=1 FUNC_IS_LOGIN value
     * @property {number} FUNC_GET_SELF_WXID=16 FUNC_GET_SELF_WXID value
     * @property {number} FUNC_GET_MSG_TYPES=17 FUNC_GET_MSG_TYPES value
     * @property {number} FUNC_GET_CONTACTS=18 FUNC_GET_CONTACTS value
     * @property {number} FUNC_GET_DB_NAMES=19 FUNC_GET_DB_NAMES value
     * @property {number} FUNC_GET_DB_TABLES=20 FUNC_GET_DB_TABLES value
     * @property {number} FUNC_GET_USER_INFO=21 FUNC_GET_USER_INFO value
     * @property {number} FUNC_SEND_TXT=32 FUNC_SEND_TXT value
     * @property {number} FUNC_SEND_IMG=33 FUNC_SEND_IMG value
     * @property {number} FUNC_SEND_FILE=34 FUNC_SEND_FILE value
     * @property {number} FUNC_SEND_XML=35 FUNC_SEND_XML value
     * @property {number} FUNC_SEND_EMOTION=36 FUNC_SEND_EMOTION value
     * @property {number} FUNC_ENABLE_RECV_TXT=48 FUNC_ENABLE_RECV_TXT value
     * @property {number} FUNC_DISABLE_RECV_TXT=64 FUNC_DISABLE_RECV_TXT value
     * @property {number} FUNC_EXEC_DB_QUERY=80 FUNC_EXEC_DB_QUERY value
     * @property {number} FUNC_ACCEPT_FRIEND=81 FUNC_ACCEPT_FRIEND value
     * @property {number} FUNC_ADD_ROOM_MEMBERS=82 FUNC_ADD_ROOM_MEMBERS value
     * @property {number} FUNC_RECV_TRANSFER=83 FUNC_RECV_TRANSFER value
     * @property {number} FUNC_DECRYPT_IMAGE=96 FUNC_DECRYPT_IMAGE value
     */
    wcf.Functions = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FUNC_RESERVED"] = 0;
        values[valuesById[1] = "FUNC_IS_LOGIN"] = 1;
        values[valuesById[16] = "FUNC_GET_SELF_WXID"] = 16;
        values[valuesById[17] = "FUNC_GET_MSG_TYPES"] = 17;
        values[valuesById[18] = "FUNC_GET_CONTACTS"] = 18;
        values[valuesById[19] = "FUNC_GET_DB_NAMES"] = 19;
        values[valuesById[20] = "FUNC_GET_DB_TABLES"] = 20;
        values[valuesById[21] = "FUNC_GET_USER_INFO"] = 21;
        values[valuesById[32] = "FUNC_SEND_TXT"] = 32;
        values[valuesById[33] = "FUNC_SEND_IMG"] = 33;
        values[valuesById[34] = "FUNC_SEND_FILE"] = 34;
        values[valuesById[35] = "FUNC_SEND_XML"] = 35;
        values[valuesById[36] = "FUNC_SEND_EMOTION"] = 36;
        values[valuesById[48] = "FUNC_ENABLE_RECV_TXT"] = 48;
        values[valuesById[64] = "FUNC_DISABLE_RECV_TXT"] = 64;
        values[valuesById[80] = "FUNC_EXEC_DB_QUERY"] = 80;
        values[valuesById[81] = "FUNC_ACCEPT_FRIEND"] = 81;
        values[valuesById[82] = "FUNC_ADD_ROOM_MEMBERS"] = 82;
        values[valuesById[83] = "FUNC_RECV_TRANSFER"] = 83;
        values[valuesById[96] = "FUNC_DECRYPT_IMAGE"] = 96;
        return values;
    })();

    wcf.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof wcf
         * @interface IRequest
         * @property {wcf.Functions|null} [func] Request func
         * @property {wcf.IEmpty|null} [empty] Request empty
         * @property {string|null} [str] Request str
         * @property {wcf.ITextMsg|null} [txt] Request txt
         * @property {wcf.IPathMsg|null} [file] Request file
         * @property {wcf.IDbQuery|null} [query] Request query
         * @property {wcf.IVerification|null} [v] Request v
         * @property {wcf.IAddMembers|null} [m] Request m
         * @property {wcf.IXmlMsg|null} [xml] Request xml
         * @property {wcf.IDecPath|null} [dec] Request dec
         * @property {wcf.ITransfer|null} [tf] Request tf
         */

        /**
         * Constructs a new Request.
         * @memberof wcf
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {wcf.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request func.
         * @member {wcf.Functions} func
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.func = 0;

        /**
         * Request empty.
         * @member {wcf.IEmpty|null|undefined} empty
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.empty = null;

        /**
         * Request str.
         * @member {string|null|undefined} str
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.str = null;

        /**
         * Request txt.
         * @member {wcf.ITextMsg|null|undefined} txt
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.txt = null;

        /**
         * Request file.
         * @member {wcf.IPathMsg|null|undefined} file
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.file = null;

        /**
         * Request query.
         * @member {wcf.IDbQuery|null|undefined} query
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.query = null;

        /**
         * Request v.
         * @member {wcf.IVerification|null|undefined} v
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.v = null;

        /**
         * Request m.
         * @member {wcf.IAddMembers|null|undefined} m
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.m = null;

        /**
         * Request xml.
         * @member {wcf.IXmlMsg|null|undefined} xml
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.xml = null;

        /**
         * Request dec.
         * @member {wcf.IDecPath|null|undefined} dec
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.dec = null;

        /**
         * Request tf.
         * @member {wcf.ITransfer|null|undefined} tf
         * @memberof wcf.Request
         * @instance
         */
        Request.prototype.tf = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Request msg.
         * @member {"empty"|"str"|"txt"|"file"|"query"|"v"|"m"|"xml"|"dec"|"tf"|undefined} msg
         * @memberof wcf.Request
         * @instance
         */
        Object.defineProperty(Request.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["empty", "str", "txt", "file", "query", "v", "m", "xml", "dec", "tf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof wcf.Request
         * @static
         * @param {wcf.IRequest=} [properties] Properties to set
         * @returns {wcf.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link wcf.Request.verify|verify} messages.
         * @function encode
         * @memberof wcf.Request
         * @static
         * @param {wcf.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.func);
            if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                $root.wcf.Empty.encode(message.empty, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.str);
            if (message.txt != null && Object.hasOwnProperty.call(message, "txt"))
                $root.wcf.TextMsg.encode(message.txt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.wcf.PathMsg.encode(message.file, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.wcf.DbQuery.encode(message.query, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.v != null && Object.hasOwnProperty.call(message, "v"))
                $root.wcf.Verification.encode(message.v, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.m != null && Object.hasOwnProperty.call(message, "m"))
                $root.wcf.AddMembers.encode(message.m, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.xml != null && Object.hasOwnProperty.call(message, "xml"))
                $root.wcf.XmlMsg.encode(message.xml, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.dec != null && Object.hasOwnProperty.call(message, "dec"))
                $root.wcf.DecPath.encode(message.dec, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.tf != null && Object.hasOwnProperty.call(message, "tf"))
                $root.wcf.Transfer.encode(message.tf, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link wcf.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.Request
         * @static
         * @param {wcf.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.Request();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = reader.int32();
                        break;
                    }
                case 2: {
                        message.empty = $root.wcf.Empty.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.str = reader.string();
                        break;
                    }
                case 4: {
                        message.txt = $root.wcf.TextMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.file = $root.wcf.PathMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.query = $root.wcf.DbQuery.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.v = $root.wcf.Verification.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.m = $root.wcf.AddMembers.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.xml = $root.wcf.XmlMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.dec = $root.wcf.DecPath.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.tf = $root.wcf.Transfer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof wcf.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.func != null && message.hasOwnProperty("func"))
                switch (message.func) {
                default:
                    return "func: enum value expected";
                case 0:
                case 1:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 48:
                case 64:
                case 80:
                case 81:
                case 82:
                case 83:
                case 96:
                    break;
                }
            if (message.empty != null && message.hasOwnProperty("empty")) {
                properties.msg = 1;
                {
                    let error = $root.wcf.Empty.verify(message.empty);
                    if (error)
                        return "empty." + error;
                }
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                if (!$util.isString(message.str))
                    return "str: string expected";
            }
            if (message.txt != null && message.hasOwnProperty("txt")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.TextMsg.verify(message.txt);
                    if (error)
                        return "txt." + error;
                }
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.PathMsg.verify(message.file);
                    if (error)
                        return "file." + error;
                }
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.DbQuery.verify(message.query);
                    if (error)
                        return "query." + error;
                }
            }
            if (message.v != null && message.hasOwnProperty("v")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.Verification.verify(message.v);
                    if (error)
                        return "v." + error;
                }
            }
            if (message.m != null && message.hasOwnProperty("m")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.AddMembers.verify(message.m);
                    if (error)
                        return "m." + error;
                }
            }
            if (message.xml != null && message.hasOwnProperty("xml")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.XmlMsg.verify(message.xml);
                    if (error)
                        return "xml." + error;
                }
            }
            if (message.dec != null && message.hasOwnProperty("dec")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.DecPath.verify(message.dec);
                    if (error)
                        return "dec." + error;
                }
            }
            if (message.tf != null && message.hasOwnProperty("tf")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.Transfer.verify(message.tf);
                    if (error)
                        return "tf." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.Request)
                return object;
            let message = new $root.wcf.Request();
            switch (object.func) {
            default:
                if (typeof object.func === "number") {
                    message.func = object.func;
                    break;
                }
                break;
            case "FUNC_RESERVED":
            case 0:
                message.func = 0;
                break;
            case "FUNC_IS_LOGIN":
            case 1:
                message.func = 1;
                break;
            case "FUNC_GET_SELF_WXID":
            case 16:
                message.func = 16;
                break;
            case "FUNC_GET_MSG_TYPES":
            case 17:
                message.func = 17;
                break;
            case "FUNC_GET_CONTACTS":
            case 18:
                message.func = 18;
                break;
            case "FUNC_GET_DB_NAMES":
            case 19:
                message.func = 19;
                break;
            case "FUNC_GET_DB_TABLES":
            case 20:
                message.func = 20;
                break;
            case "FUNC_GET_USER_INFO":
            case 21:
                message.func = 21;
                break;
            case "FUNC_SEND_TXT":
            case 32:
                message.func = 32;
                break;
            case "FUNC_SEND_IMG":
            case 33:
                message.func = 33;
                break;
            case "FUNC_SEND_FILE":
            case 34:
                message.func = 34;
                break;
            case "FUNC_SEND_XML":
            case 35:
                message.func = 35;
                break;
            case "FUNC_SEND_EMOTION":
            case 36:
                message.func = 36;
                break;
            case "FUNC_ENABLE_RECV_TXT":
            case 48:
                message.func = 48;
                break;
            case "FUNC_DISABLE_RECV_TXT":
            case 64:
                message.func = 64;
                break;
            case "FUNC_EXEC_DB_QUERY":
            case 80:
                message.func = 80;
                break;
            case "FUNC_ACCEPT_FRIEND":
            case 81:
                message.func = 81;
                break;
            case "FUNC_ADD_ROOM_MEMBERS":
            case 82:
                message.func = 82;
                break;
            case "FUNC_RECV_TRANSFER":
            case 83:
                message.func = 83;
                break;
            case "FUNC_DECRYPT_IMAGE":
            case 96:
                message.func = 96;
                break;
            }
            if (object.empty != null) {
                if (typeof object.empty !== "object")
                    throw TypeError(".wcf.Request.empty: object expected");
                message.empty = $root.wcf.Empty.fromObject(object.empty);
            }
            if (object.str != null)
                message.str = String(object.str);
            if (object.txt != null) {
                if (typeof object.txt !== "object")
                    throw TypeError(".wcf.Request.txt: object expected");
                message.txt = $root.wcf.TextMsg.fromObject(object.txt);
            }
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".wcf.Request.file: object expected");
                message.file = $root.wcf.PathMsg.fromObject(object.file);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".wcf.Request.query: object expected");
                message.query = $root.wcf.DbQuery.fromObject(object.query);
            }
            if (object.v != null) {
                if (typeof object.v !== "object")
                    throw TypeError(".wcf.Request.v: object expected");
                message.v = $root.wcf.Verification.fromObject(object.v);
            }
            if (object.m != null) {
                if (typeof object.m !== "object")
                    throw TypeError(".wcf.Request.m: object expected");
                message.m = $root.wcf.AddMembers.fromObject(object.m);
            }
            if (object.xml != null) {
                if (typeof object.xml !== "object")
                    throw TypeError(".wcf.Request.xml: object expected");
                message.xml = $root.wcf.XmlMsg.fromObject(object.xml);
            }
            if (object.dec != null) {
                if (typeof object.dec !== "object")
                    throw TypeError(".wcf.Request.dec: object expected");
                message.dec = $root.wcf.DecPath.fromObject(object.dec);
            }
            if (object.tf != null) {
                if (typeof object.tf !== "object")
                    throw TypeError(".wcf.Request.tf: object expected");
                message.tf = $root.wcf.Transfer.fromObject(object.tf);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.Request
         * @static
         * @param {wcf.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.func = options.enums === String ? "FUNC_RESERVED" : 0;
            if (message.func != null && message.hasOwnProperty("func"))
                object.func = options.enums === String ? $root.wcf.Functions[message.func] === undefined ? message.func : $root.wcf.Functions[message.func] : message.func;
            if (message.empty != null && message.hasOwnProperty("empty")) {
                object.empty = $root.wcf.Empty.toObject(message.empty, options);
                if (options.oneofs)
                    object.msg = "empty";
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                object.str = message.str;
                if (options.oneofs)
                    object.msg = "str";
            }
            if (message.txt != null && message.hasOwnProperty("txt")) {
                object.txt = $root.wcf.TextMsg.toObject(message.txt, options);
                if (options.oneofs)
                    object.msg = "txt";
            }
            if (message.file != null && message.hasOwnProperty("file")) {
                object.file = $root.wcf.PathMsg.toObject(message.file, options);
                if (options.oneofs)
                    object.msg = "file";
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                object.query = $root.wcf.DbQuery.toObject(message.query, options);
                if (options.oneofs)
                    object.msg = "query";
            }
            if (message.v != null && message.hasOwnProperty("v")) {
                object.v = $root.wcf.Verification.toObject(message.v, options);
                if (options.oneofs)
                    object.msg = "v";
            }
            if (message.m != null && message.hasOwnProperty("m")) {
                object.m = $root.wcf.AddMembers.toObject(message.m, options);
                if (options.oneofs)
                    object.msg = "m";
            }
            if (message.xml != null && message.hasOwnProperty("xml")) {
                object.xml = $root.wcf.XmlMsg.toObject(message.xml, options);
                if (options.oneofs)
                    object.msg = "xml";
            }
            if (message.dec != null && message.hasOwnProperty("dec")) {
                object.dec = $root.wcf.DecPath.toObject(message.dec, options);
                if (options.oneofs)
                    object.msg = "dec";
            }
            if (message.tf != null && message.hasOwnProperty("tf")) {
                object.tf = $root.wcf.Transfer.toObject(message.tf, options);
                if (options.oneofs)
                    object.msg = "tf";
            }
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof wcf.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof wcf.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.Request";
        };

        return Request;
    })();

    wcf.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof wcf
         * @interface IResponse
         * @property {wcf.Functions|null} [func] Response func
         * @property {number|null} [status] Response status
         * @property {string|null} [str] Response str
         * @property {wcf.IWxMsg|null} [wxmsg] Response wxmsg
         * @property {wcf.IMsgTypes|null} [types] Response types
         * @property {wcf.IRpcContacts|null} [contacts] Response contacts
         * @property {wcf.IDbNames|null} [dbs] Response dbs
         * @property {wcf.IDbTables|null} [tables] Response tables
         * @property {wcf.IDbRows|null} [rows] Response rows
         * @property {wcf.IUserInfo|null} [ui] Response ui
         */

        /**
         * Constructs a new Response.
         * @memberof wcf
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {wcf.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response func.
         * @member {wcf.Functions} func
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.func = 0;

        /**
         * Response status.
         * @member {number|null|undefined} status
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.status = null;

        /**
         * Response str.
         * @member {string|null|undefined} str
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.str = null;

        /**
         * Response wxmsg.
         * @member {wcf.IWxMsg|null|undefined} wxmsg
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.wxmsg = null;

        /**
         * Response types.
         * @member {wcf.IMsgTypes|null|undefined} types
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.types = null;

        /**
         * Response contacts.
         * @member {wcf.IRpcContacts|null|undefined} contacts
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.contacts = null;

        /**
         * Response dbs.
         * @member {wcf.IDbNames|null|undefined} dbs
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.dbs = null;

        /**
         * Response tables.
         * @member {wcf.IDbTables|null|undefined} tables
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.tables = null;

        /**
         * Response rows.
         * @member {wcf.IDbRows|null|undefined} rows
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.rows = null;

        /**
         * Response ui.
         * @member {wcf.IUserInfo|null|undefined} ui
         * @memberof wcf.Response
         * @instance
         */
        Response.prototype.ui = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Response msg.
         * @member {"status"|"str"|"wxmsg"|"types"|"contacts"|"dbs"|"tables"|"rows"|"ui"|undefined} msg
         * @memberof wcf.Response
         * @instance
         */
        Object.defineProperty(Response.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["status", "str", "wxmsg", "types", "contacts", "dbs", "tables", "rows", "ui"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof wcf.Response
         * @static
         * @param {wcf.IResponse=} [properties] Properties to set
         * @returns {wcf.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link wcf.Response.verify|verify} messages.
         * @function encode
         * @memberof wcf.Response
         * @static
         * @param {wcf.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.func);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.str);
            if (message.wxmsg != null && Object.hasOwnProperty.call(message, "wxmsg"))
                $root.wcf.WxMsg.encode(message.wxmsg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.types != null && Object.hasOwnProperty.call(message, "types"))
                $root.wcf.MsgTypes.encode(message.types, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.contacts != null && Object.hasOwnProperty.call(message, "contacts"))
                $root.wcf.RpcContacts.encode(message.contacts, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.dbs != null && Object.hasOwnProperty.call(message, "dbs"))
                $root.wcf.DbNames.encode(message.dbs, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.tables != null && Object.hasOwnProperty.call(message, "tables"))
                $root.wcf.DbTables.encode(message.tables, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.rows != null && Object.hasOwnProperty.call(message, "rows"))
                $root.wcf.DbRows.encode(message.rows, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.ui != null && Object.hasOwnProperty.call(message, "ui"))
                $root.wcf.UserInfo.encode(message.ui, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link wcf.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.Response
         * @static
         * @param {wcf.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.func = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.str = reader.string();
                        break;
                    }
                case 4: {
                        message.wxmsg = $root.wcf.WxMsg.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.types = $root.wcf.MsgTypes.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.contacts = $root.wcf.RpcContacts.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.dbs = $root.wcf.DbNames.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.tables = $root.wcf.DbTables.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.rows = $root.wcf.DbRows.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.ui = $root.wcf.UserInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof wcf.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.func != null && message.hasOwnProperty("func"))
                switch (message.func) {
                default:
                    return "func: enum value expected";
                case 0:
                case 1:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 48:
                case 64:
                case 80:
                case 81:
                case 82:
                case 83:
                case 96:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status")) {
                properties.msg = 1;
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                if (!$util.isString(message.str))
                    return "str: string expected";
            }
            if (message.wxmsg != null && message.hasOwnProperty("wxmsg")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.WxMsg.verify(message.wxmsg);
                    if (error)
                        return "wxmsg." + error;
                }
            }
            if (message.types != null && message.hasOwnProperty("types")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.MsgTypes.verify(message.types);
                    if (error)
                        return "types." + error;
                }
            }
            if (message.contacts != null && message.hasOwnProperty("contacts")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.RpcContacts.verify(message.contacts);
                    if (error)
                        return "contacts." + error;
                }
            }
            if (message.dbs != null && message.hasOwnProperty("dbs")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.DbNames.verify(message.dbs);
                    if (error)
                        return "dbs." + error;
                }
            }
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.DbTables.verify(message.tables);
                    if (error)
                        return "tables." + error;
                }
            }
            if (message.rows != null && message.hasOwnProperty("rows")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.DbRows.verify(message.rows);
                    if (error)
                        return "rows." + error;
                }
            }
            if (message.ui != null && message.hasOwnProperty("ui")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.wcf.UserInfo.verify(message.ui);
                    if (error)
                        return "ui." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.Response)
                return object;
            let message = new $root.wcf.Response();
            switch (object.func) {
            default:
                if (typeof object.func === "number") {
                    message.func = object.func;
                    break;
                }
                break;
            case "FUNC_RESERVED":
            case 0:
                message.func = 0;
                break;
            case "FUNC_IS_LOGIN":
            case 1:
                message.func = 1;
                break;
            case "FUNC_GET_SELF_WXID":
            case 16:
                message.func = 16;
                break;
            case "FUNC_GET_MSG_TYPES":
            case 17:
                message.func = 17;
                break;
            case "FUNC_GET_CONTACTS":
            case 18:
                message.func = 18;
                break;
            case "FUNC_GET_DB_NAMES":
            case 19:
                message.func = 19;
                break;
            case "FUNC_GET_DB_TABLES":
            case 20:
                message.func = 20;
                break;
            case "FUNC_GET_USER_INFO":
            case 21:
                message.func = 21;
                break;
            case "FUNC_SEND_TXT":
            case 32:
                message.func = 32;
                break;
            case "FUNC_SEND_IMG":
            case 33:
                message.func = 33;
                break;
            case "FUNC_SEND_FILE":
            case 34:
                message.func = 34;
                break;
            case "FUNC_SEND_XML":
            case 35:
                message.func = 35;
                break;
            case "FUNC_SEND_EMOTION":
            case 36:
                message.func = 36;
                break;
            case "FUNC_ENABLE_RECV_TXT":
            case 48:
                message.func = 48;
                break;
            case "FUNC_DISABLE_RECV_TXT":
            case 64:
                message.func = 64;
                break;
            case "FUNC_EXEC_DB_QUERY":
            case 80:
                message.func = 80;
                break;
            case "FUNC_ACCEPT_FRIEND":
            case 81:
                message.func = 81;
                break;
            case "FUNC_ADD_ROOM_MEMBERS":
            case 82:
                message.func = 82;
                break;
            case "FUNC_RECV_TRANSFER":
            case 83:
                message.func = 83;
                break;
            case "FUNC_DECRYPT_IMAGE":
            case 96:
                message.func = 96;
                break;
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.str != null)
                message.str = String(object.str);
            if (object.wxmsg != null) {
                if (typeof object.wxmsg !== "object")
                    throw TypeError(".wcf.Response.wxmsg: object expected");
                message.wxmsg = $root.wcf.WxMsg.fromObject(object.wxmsg);
            }
            if (object.types != null) {
                if (typeof object.types !== "object")
                    throw TypeError(".wcf.Response.types: object expected");
                message.types = $root.wcf.MsgTypes.fromObject(object.types);
            }
            if (object.contacts != null) {
                if (typeof object.contacts !== "object")
                    throw TypeError(".wcf.Response.contacts: object expected");
                message.contacts = $root.wcf.RpcContacts.fromObject(object.contacts);
            }
            if (object.dbs != null) {
                if (typeof object.dbs !== "object")
                    throw TypeError(".wcf.Response.dbs: object expected");
                message.dbs = $root.wcf.DbNames.fromObject(object.dbs);
            }
            if (object.tables != null) {
                if (typeof object.tables !== "object")
                    throw TypeError(".wcf.Response.tables: object expected");
                message.tables = $root.wcf.DbTables.fromObject(object.tables);
            }
            if (object.rows != null) {
                if (typeof object.rows !== "object")
                    throw TypeError(".wcf.Response.rows: object expected");
                message.rows = $root.wcf.DbRows.fromObject(object.rows);
            }
            if (object.ui != null) {
                if (typeof object.ui !== "object")
                    throw TypeError(".wcf.Response.ui: object expected");
                message.ui = $root.wcf.UserInfo.fromObject(object.ui);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.Response
         * @static
         * @param {wcf.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.func = options.enums === String ? "FUNC_RESERVED" : 0;
            if (message.func != null && message.hasOwnProperty("func"))
                object.func = options.enums === String ? $root.wcf.Functions[message.func] === undefined ? message.func : $root.wcf.Functions[message.func] : message.func;
            if (message.status != null && message.hasOwnProperty("status")) {
                object.status = message.status;
                if (options.oneofs)
                    object.msg = "status";
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                object.str = message.str;
                if (options.oneofs)
                    object.msg = "str";
            }
            if (message.wxmsg != null && message.hasOwnProperty("wxmsg")) {
                object.wxmsg = $root.wcf.WxMsg.toObject(message.wxmsg, options);
                if (options.oneofs)
                    object.msg = "wxmsg";
            }
            if (message.types != null && message.hasOwnProperty("types")) {
                object.types = $root.wcf.MsgTypes.toObject(message.types, options);
                if (options.oneofs)
                    object.msg = "types";
            }
            if (message.contacts != null && message.hasOwnProperty("contacts")) {
                object.contacts = $root.wcf.RpcContacts.toObject(message.contacts, options);
                if (options.oneofs)
                    object.msg = "contacts";
            }
            if (message.dbs != null && message.hasOwnProperty("dbs")) {
                object.dbs = $root.wcf.DbNames.toObject(message.dbs, options);
                if (options.oneofs)
                    object.msg = "dbs";
            }
            if (message.tables != null && message.hasOwnProperty("tables")) {
                object.tables = $root.wcf.DbTables.toObject(message.tables, options);
                if (options.oneofs)
                    object.msg = "tables";
            }
            if (message.rows != null && message.hasOwnProperty("rows")) {
                object.rows = $root.wcf.DbRows.toObject(message.rows, options);
                if (options.oneofs)
                    object.msg = "rows";
            }
            if (message.ui != null && message.hasOwnProperty("ui")) {
                object.ui = $root.wcf.UserInfo.toObject(message.ui, options);
                if (options.oneofs)
                    object.msg = "ui";
            }
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof wcf.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof wcf.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.Response";
        };

        return Response;
    })();

    wcf.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof wcf
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof wcf
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {wcf.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof wcf.Empty
         * @static
         * @param {wcf.IEmpty=} [properties] Properties to set
         * @returns {wcf.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link wcf.Empty.verify|verify} messages.
         * @function encode
         * @memberof wcf.Empty
         * @static
         * @param {wcf.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link wcf.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.Empty
         * @static
         * @param {wcf.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.Empty();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof wcf.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.Empty)
                return object;
            return new $root.wcf.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.Empty
         * @static
         * @param {wcf.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof wcf.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof wcf.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.Empty";
        };

        return Empty;
    })();

    wcf.WxMsg = (function() {

        /**
         * Properties of a WxMsg.
         * @memberof wcf
         * @interface IWxMsg
         * @property {boolean|null} [isSelf] WxMsg isSelf
         * @property {boolean|null} [isGroup] WxMsg isGroup
         * @property {number|null} [type] WxMsg type
         * @property {string|null} [id] WxMsg id
         * @property {string|null} [xml] WxMsg xml
         * @property {string|null} [sender] WxMsg sender
         * @property {string|null} [roomid] WxMsg roomid
         * @property {string|null} [content] WxMsg content
         * @property {string|null} [thumb] WxMsg thumb
         * @property {string|null} [extra] WxMsg extra
         */

        /**
         * Constructs a new WxMsg.
         * @memberof wcf
         * @classdesc Represents a WxMsg.
         * @implements IWxMsg
         * @constructor
         * @param {wcf.IWxMsg=} [properties] Properties to set
         */
        function WxMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WxMsg isSelf.
         * @member {boolean} isSelf
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.isSelf = false;

        /**
         * WxMsg isGroup.
         * @member {boolean} isGroup
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.isGroup = false;

        /**
         * WxMsg type.
         * @member {number} type
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.type = 0;

        /**
         * WxMsg id.
         * @member {string} id
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.id = "";

        /**
         * WxMsg xml.
         * @member {string} xml
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.xml = "";

        /**
         * WxMsg sender.
         * @member {string} sender
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.sender = "";

        /**
         * WxMsg roomid.
         * @member {string} roomid
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.roomid = "";

        /**
         * WxMsg content.
         * @member {string} content
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.content = "";

        /**
         * WxMsg thumb.
         * @member {string} thumb
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.thumb = "";

        /**
         * WxMsg extra.
         * @member {string} extra
         * @memberof wcf.WxMsg
         * @instance
         */
        WxMsg.prototype.extra = "";

        /**
         * Creates a new WxMsg instance using the specified properties.
         * @function create
         * @memberof wcf.WxMsg
         * @static
         * @param {wcf.IWxMsg=} [properties] Properties to set
         * @returns {wcf.WxMsg} WxMsg instance
         */
        WxMsg.create = function create(properties) {
            return new WxMsg(properties);
        };

        /**
         * Encodes the specified WxMsg message. Does not implicitly {@link wcf.WxMsg.verify|verify} messages.
         * @function encode
         * @memberof wcf.WxMsg
         * @static
         * @param {wcf.IWxMsg} message WxMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WxMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isSelf != null && Object.hasOwnProperty.call(message, "isSelf"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isSelf);
            if (message.isGroup != null && Object.hasOwnProperty.call(message, "isGroup"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isGroup);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            if (message.xml != null && Object.hasOwnProperty.call(message, "xml"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.xml);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sender);
            if (message.roomid != null && Object.hasOwnProperty.call(message, "roomid"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.roomid);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.content);
            if (message.thumb != null && Object.hasOwnProperty.call(message, "thumb"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.thumb);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.extra);
            return writer;
        };

        /**
         * Encodes the specified WxMsg message, length delimited. Does not implicitly {@link wcf.WxMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.WxMsg
         * @static
         * @param {wcf.IWxMsg} message WxMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WxMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WxMsg message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.WxMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.WxMsg} WxMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WxMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.WxMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isSelf = reader.bool();
                        break;
                    }
                case 2: {
                        message.isGroup = reader.bool();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.id = reader.string();
                        break;
                    }
                case 5: {
                        message.xml = reader.string();
                        break;
                    }
                case 6: {
                        message.sender = reader.string();
                        break;
                    }
                case 7: {
                        message.roomid = reader.string();
                        break;
                    }
                case 8: {
                        message.content = reader.string();
                        break;
                    }
                case 9: {
                        message.thumb = reader.string();
                        break;
                    }
                case 10: {
                        message.extra = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WxMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.WxMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.WxMsg} WxMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WxMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WxMsg message.
         * @function verify
         * @memberof wcf.WxMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WxMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isSelf != null && message.hasOwnProperty("isSelf"))
                if (typeof message.isSelf !== "boolean")
                    return "isSelf: boolean expected";
            if (message.isGroup != null && message.hasOwnProperty("isGroup"))
                if (typeof message.isGroup !== "boolean")
                    return "isGroup: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.xml != null && message.hasOwnProperty("xml"))
                if (!$util.isString(message.xml))
                    return "xml: string expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!$util.isString(message.sender))
                    return "sender: string expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isString(message.roomid))
                    return "roomid: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.thumb != null && message.hasOwnProperty("thumb"))
                if (!$util.isString(message.thumb))
                    return "thumb: string expected";
            if (message.extra != null && message.hasOwnProperty("extra"))
                if (!$util.isString(message.extra))
                    return "extra: string expected";
            return null;
        };

        /**
         * Creates a WxMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.WxMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.WxMsg} WxMsg
         */
        WxMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.WxMsg)
                return object;
            let message = new $root.wcf.WxMsg();
            if (object.isSelf != null)
                message.isSelf = Boolean(object.isSelf);
            if (object.isGroup != null)
                message.isGroup = Boolean(object.isGroup);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.id != null)
                message.id = String(object.id);
            if (object.xml != null)
                message.xml = String(object.xml);
            if (object.sender != null)
                message.sender = String(object.sender);
            if (object.roomid != null)
                message.roomid = String(object.roomid);
            if (object.content != null)
                message.content = String(object.content);
            if (object.thumb != null)
                message.thumb = String(object.thumb);
            if (object.extra != null)
                message.extra = String(object.extra);
            return message;
        };

        /**
         * Creates a plain object from a WxMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.WxMsg
         * @static
         * @param {wcf.WxMsg} message WxMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WxMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isSelf = false;
                object.isGroup = false;
                object.type = 0;
                object.id = "";
                object.xml = "";
                object.sender = "";
                object.roomid = "";
                object.content = "";
                object.thumb = "";
                object.extra = "";
            }
            if (message.isSelf != null && message.hasOwnProperty("isSelf"))
                object.isSelf = message.isSelf;
            if (message.isGroup != null && message.hasOwnProperty("isGroup"))
                object.isGroup = message.isGroup;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.xml != null && message.hasOwnProperty("xml"))
                object.xml = message.xml;
            if (message.sender != null && message.hasOwnProperty("sender"))
                object.sender = message.sender;
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.thumb != null && message.hasOwnProperty("thumb"))
                object.thumb = message.thumb;
            if (message.extra != null && message.hasOwnProperty("extra"))
                object.extra = message.extra;
            return object;
        };

        /**
         * Converts this WxMsg to JSON.
         * @function toJSON
         * @memberof wcf.WxMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WxMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WxMsg
         * @function getTypeUrl
         * @memberof wcf.WxMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WxMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.WxMsg";
        };

        return WxMsg;
    })();

    wcf.TextMsg = (function() {

        /**
         * Properties of a TextMsg.
         * @memberof wcf
         * @interface ITextMsg
         * @property {string|null} [msg] TextMsg msg
         * @property {string|null} [receiver] TextMsg receiver
         * @property {string|null} [aters] TextMsg aters
         */

        /**
         * Constructs a new TextMsg.
         * @memberof wcf
         * @classdesc Represents a TextMsg.
         * @implements ITextMsg
         * @constructor
         * @param {wcf.ITextMsg=} [properties] Properties to set
         */
        function TextMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TextMsg msg.
         * @member {string} msg
         * @memberof wcf.TextMsg
         * @instance
         */
        TextMsg.prototype.msg = "";

        /**
         * TextMsg receiver.
         * @member {string} receiver
         * @memberof wcf.TextMsg
         * @instance
         */
        TextMsg.prototype.receiver = "";

        /**
         * TextMsg aters.
         * @member {string} aters
         * @memberof wcf.TextMsg
         * @instance
         */
        TextMsg.prototype.aters = "";

        /**
         * Creates a new TextMsg instance using the specified properties.
         * @function create
         * @memberof wcf.TextMsg
         * @static
         * @param {wcf.ITextMsg=} [properties] Properties to set
         * @returns {wcf.TextMsg} TextMsg instance
         */
        TextMsg.create = function create(properties) {
            return new TextMsg(properties);
        };

        /**
         * Encodes the specified TextMsg message. Does not implicitly {@link wcf.TextMsg.verify|verify} messages.
         * @function encode
         * @memberof wcf.TextMsg
         * @static
         * @param {wcf.ITextMsg} message TextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.receiver != null && Object.hasOwnProperty.call(message, "receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.receiver);
            if (message.aters != null && Object.hasOwnProperty.call(message, "aters"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.aters);
            return writer;
        };

        /**
         * Encodes the specified TextMsg message, length delimited. Does not implicitly {@link wcf.TextMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.TextMsg
         * @static
         * @param {wcf.ITextMsg} message TextMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TextMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TextMsg message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.TextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.TextMsg} TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.TextMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = reader.string();
                        break;
                    }
                case 2: {
                        message.receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.aters = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TextMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.TextMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.TextMsg} TextMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TextMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TextMsg message.
         * @function verify
         * @memberof wcf.TextMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TextMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                if (!$util.isString(message.receiver))
                    return "receiver: string expected";
            if (message.aters != null && message.hasOwnProperty("aters"))
                if (!$util.isString(message.aters))
                    return "aters: string expected";
            return null;
        };

        /**
         * Creates a TextMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.TextMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.TextMsg} TextMsg
         */
        TextMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.TextMsg)
                return object;
            let message = new $root.wcf.TextMsg();
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.receiver != null)
                message.receiver = String(object.receiver);
            if (object.aters != null)
                message.aters = String(object.aters);
            return message;
        };

        /**
         * Creates a plain object from a TextMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.TextMsg
         * @static
         * @param {wcf.TextMsg} message TextMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TextMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msg = "";
                object.receiver = "";
                object.aters = "";
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                object.receiver = message.receiver;
            if (message.aters != null && message.hasOwnProperty("aters"))
                object.aters = message.aters;
            return object;
        };

        /**
         * Converts this TextMsg to JSON.
         * @function toJSON
         * @memberof wcf.TextMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TextMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TextMsg
         * @function getTypeUrl
         * @memberof wcf.TextMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TextMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.TextMsg";
        };

        return TextMsg;
    })();

    wcf.PathMsg = (function() {

        /**
         * Properties of a PathMsg.
         * @memberof wcf
         * @interface IPathMsg
         * @property {string|null} [path] PathMsg path
         * @property {string|null} [receiver] PathMsg receiver
         */

        /**
         * Constructs a new PathMsg.
         * @memberof wcf
         * @classdesc Represents a PathMsg.
         * @implements IPathMsg
         * @constructor
         * @param {wcf.IPathMsg=} [properties] Properties to set
         */
        function PathMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PathMsg path.
         * @member {string} path
         * @memberof wcf.PathMsg
         * @instance
         */
        PathMsg.prototype.path = "";

        /**
         * PathMsg receiver.
         * @member {string} receiver
         * @memberof wcf.PathMsg
         * @instance
         */
        PathMsg.prototype.receiver = "";

        /**
         * Creates a new PathMsg instance using the specified properties.
         * @function create
         * @memberof wcf.PathMsg
         * @static
         * @param {wcf.IPathMsg=} [properties] Properties to set
         * @returns {wcf.PathMsg} PathMsg instance
         */
        PathMsg.create = function create(properties) {
            return new PathMsg(properties);
        };

        /**
         * Encodes the specified PathMsg message. Does not implicitly {@link wcf.PathMsg.verify|verify} messages.
         * @function encode
         * @memberof wcf.PathMsg
         * @static
         * @param {wcf.IPathMsg} message PathMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PathMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.receiver != null && Object.hasOwnProperty.call(message, "receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.receiver);
            return writer;
        };

        /**
         * Encodes the specified PathMsg message, length delimited. Does not implicitly {@link wcf.PathMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.PathMsg
         * @static
         * @param {wcf.IPathMsg} message PathMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PathMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PathMsg message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.PathMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.PathMsg} PathMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PathMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.PathMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.receiver = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PathMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.PathMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.PathMsg} PathMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PathMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PathMsg message.
         * @function verify
         * @memberof wcf.PathMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PathMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                if (!$util.isString(message.receiver))
                    return "receiver: string expected";
            return null;
        };

        /**
         * Creates a PathMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.PathMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.PathMsg} PathMsg
         */
        PathMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.PathMsg)
                return object;
            let message = new $root.wcf.PathMsg();
            if (object.path != null)
                message.path = String(object.path);
            if (object.receiver != null)
                message.receiver = String(object.receiver);
            return message;
        };

        /**
         * Creates a plain object from a PathMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.PathMsg
         * @static
         * @param {wcf.PathMsg} message PathMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PathMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.path = "";
                object.receiver = "";
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                object.receiver = message.receiver;
            return object;
        };

        /**
         * Converts this PathMsg to JSON.
         * @function toJSON
         * @memberof wcf.PathMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PathMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PathMsg
         * @function getTypeUrl
         * @memberof wcf.PathMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PathMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.PathMsg";
        };

        return PathMsg;
    })();

    wcf.XmlMsg = (function() {

        /**
         * Properties of a XmlMsg.
         * @memberof wcf
         * @interface IXmlMsg
         * @property {string|null} [receiver] XmlMsg receiver
         * @property {string|null} [content] XmlMsg content
         * @property {string|null} [path] XmlMsg path
         * @property {number|null} [type] XmlMsg type
         */

        /**
         * Constructs a new XmlMsg.
         * @memberof wcf
         * @classdesc Represents a XmlMsg.
         * @implements IXmlMsg
         * @constructor
         * @param {wcf.IXmlMsg=} [properties] Properties to set
         */
        function XmlMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XmlMsg receiver.
         * @member {string} receiver
         * @memberof wcf.XmlMsg
         * @instance
         */
        XmlMsg.prototype.receiver = "";

        /**
         * XmlMsg content.
         * @member {string} content
         * @memberof wcf.XmlMsg
         * @instance
         */
        XmlMsg.prototype.content = "";

        /**
         * XmlMsg path.
         * @member {string} path
         * @memberof wcf.XmlMsg
         * @instance
         */
        XmlMsg.prototype.path = "";

        /**
         * XmlMsg type.
         * @member {number} type
         * @memberof wcf.XmlMsg
         * @instance
         */
        XmlMsg.prototype.type = 0;

        /**
         * Creates a new XmlMsg instance using the specified properties.
         * @function create
         * @memberof wcf.XmlMsg
         * @static
         * @param {wcf.IXmlMsg=} [properties] Properties to set
         * @returns {wcf.XmlMsg} XmlMsg instance
         */
        XmlMsg.create = function create(properties) {
            return new XmlMsg(properties);
        };

        /**
         * Encodes the specified XmlMsg message. Does not implicitly {@link wcf.XmlMsg.verify|verify} messages.
         * @function encode
         * @memberof wcf.XmlMsg
         * @static
         * @param {wcf.IXmlMsg} message XmlMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XmlMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.receiver != null && Object.hasOwnProperty.call(message, "receiver"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiver);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.path);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified XmlMsg message, length delimited. Does not implicitly {@link wcf.XmlMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.XmlMsg
         * @static
         * @param {wcf.IXmlMsg} message XmlMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XmlMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XmlMsg message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.XmlMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.XmlMsg} XmlMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XmlMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.XmlMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.receiver = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.path = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a XmlMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.XmlMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.XmlMsg} XmlMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XmlMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XmlMsg message.
         * @function verify
         * @memberof wcf.XmlMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XmlMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                if (!$util.isString(message.receiver))
                    return "receiver: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a XmlMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.XmlMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.XmlMsg} XmlMsg
         */
        XmlMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.XmlMsg)
                return object;
            let message = new $root.wcf.XmlMsg();
            if (object.receiver != null)
                message.receiver = String(object.receiver);
            if (object.content != null)
                message.content = String(object.content);
            if (object.path != null)
                message.path = String(object.path);
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a XmlMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.XmlMsg
         * @static
         * @param {wcf.XmlMsg} message XmlMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        XmlMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.receiver = "";
                object.content = "";
                object.path = "";
                object.type = 0;
            }
            if (message.receiver != null && message.hasOwnProperty("receiver"))
                object.receiver = message.receiver;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this XmlMsg to JSON.
         * @function toJSON
         * @memberof wcf.XmlMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        XmlMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for XmlMsg
         * @function getTypeUrl
         * @memberof wcf.XmlMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        XmlMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.XmlMsg";
        };

        return XmlMsg;
    })();

    wcf.MsgTypes = (function() {

        /**
         * Properties of a MsgTypes.
         * @memberof wcf
         * @interface IMsgTypes
         * @property {Object.<string,string>|null} [types] MsgTypes types
         */

        /**
         * Constructs a new MsgTypes.
         * @memberof wcf
         * @classdesc Represents a MsgTypes.
         * @implements IMsgTypes
         * @constructor
         * @param {wcf.IMsgTypes=} [properties] Properties to set
         */
        function MsgTypes(properties) {
            this.types = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgTypes types.
         * @member {Object.<string,string>} types
         * @memberof wcf.MsgTypes
         * @instance
         */
        MsgTypes.prototype.types = $util.emptyObject;

        /**
         * Creates a new MsgTypes instance using the specified properties.
         * @function create
         * @memberof wcf.MsgTypes
         * @static
         * @param {wcf.IMsgTypes=} [properties] Properties to set
         * @returns {wcf.MsgTypes} MsgTypes instance
         */
        MsgTypes.create = function create(properties) {
            return new MsgTypes(properties);
        };

        /**
         * Encodes the specified MsgTypes message. Does not implicitly {@link wcf.MsgTypes.verify|verify} messages.
         * @function encode
         * @memberof wcf.MsgTypes
         * @static
         * @param {wcf.IMsgTypes} message MsgTypes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgTypes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.types != null && Object.hasOwnProperty.call(message, "types"))
                for (let keys = Object.keys(message.types), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.types[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgTypes message, length delimited. Does not implicitly {@link wcf.MsgTypes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.MsgTypes
         * @static
         * @param {wcf.IMsgTypes} message MsgTypes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgTypes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgTypes message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.MsgTypes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.MsgTypes} MsgTypes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgTypes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.MsgTypes(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.types === $util.emptyObject)
                            message.types = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.types[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgTypes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.MsgTypes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.MsgTypes} MsgTypes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgTypes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgTypes message.
         * @function verify
         * @memberof wcf.MsgTypes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgTypes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.types != null && message.hasOwnProperty("types")) {
                if (!$util.isObject(message.types))
                    return "types: object expected";
                let key = Object.keys(message.types);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "types: integer key{k:int32} expected";
                    if (!$util.isString(message.types[key[i]]))
                        return "types: string{k:int32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a MsgTypes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.MsgTypes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.MsgTypes} MsgTypes
         */
        MsgTypes.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.MsgTypes)
                return object;
            let message = new $root.wcf.MsgTypes();
            if (object.types) {
                if (typeof object.types !== "object")
                    throw TypeError(".wcf.MsgTypes.types: object expected");
                message.types = {};
                for (let keys = Object.keys(object.types), i = 0; i < keys.length; ++i)
                    message.types[keys[i]] = String(object.types[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgTypes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.MsgTypes
         * @static
         * @param {wcf.MsgTypes} message MsgTypes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgTypes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.types = {};
            let keys2;
            if (message.types && (keys2 = Object.keys(message.types)).length) {
                object.types = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.types[keys2[j]] = message.types[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this MsgTypes to JSON.
         * @function toJSON
         * @memberof wcf.MsgTypes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgTypes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgTypes
         * @function getTypeUrl
         * @memberof wcf.MsgTypes
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgTypes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.MsgTypes";
        };

        return MsgTypes;
    })();

    wcf.RpcContact = (function() {

        /**
         * Properties of a RpcContact.
         * @memberof wcf
         * @interface IRpcContact
         * @property {string|null} [wxid] RpcContact wxid
         * @property {string|null} [code] RpcContact code
         * @property {string|null} [remark] RpcContact remark
         * @property {string|null} [name] RpcContact name
         * @property {string|null} [country] RpcContact country
         * @property {string|null} [province] RpcContact province
         * @property {string|null} [city] RpcContact city
         * @property {number|null} [gender] RpcContact gender
         */

        /**
         * Constructs a new RpcContact.
         * @memberof wcf
         * @classdesc Represents a RpcContact.
         * @implements IRpcContact
         * @constructor
         * @param {wcf.IRpcContact=} [properties] Properties to set
         */
        function RpcContact(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcContact wxid.
         * @member {string} wxid
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.wxid = "";

        /**
         * RpcContact code.
         * @member {string} code
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.code = "";

        /**
         * RpcContact remark.
         * @member {string} remark
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.remark = "";

        /**
         * RpcContact name.
         * @member {string} name
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.name = "";

        /**
         * RpcContact country.
         * @member {string} country
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.country = "";

        /**
         * RpcContact province.
         * @member {string} province
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.province = "";

        /**
         * RpcContact city.
         * @member {string} city
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.city = "";

        /**
         * RpcContact gender.
         * @member {number} gender
         * @memberof wcf.RpcContact
         * @instance
         */
        RpcContact.prototype.gender = 0;

        /**
         * Creates a new RpcContact instance using the specified properties.
         * @function create
         * @memberof wcf.RpcContact
         * @static
         * @param {wcf.IRpcContact=} [properties] Properties to set
         * @returns {wcf.RpcContact} RpcContact instance
         */
        RpcContact.create = function create(properties) {
            return new RpcContact(properties);
        };

        /**
         * Encodes the specified RpcContact message. Does not implicitly {@link wcf.RpcContact.verify|verify} messages.
         * @function encode
         * @memberof wcf.RpcContact
         * @static
         * @param {wcf.IRpcContact} message RpcContact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcContact.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wxid != null && Object.hasOwnProperty.call(message, "wxid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.wxid);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.country);
            if (message.province != null && Object.hasOwnProperty.call(message, "province"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.province);
            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.city);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gender);
            return writer;
        };

        /**
         * Encodes the specified RpcContact message, length delimited. Does not implicitly {@link wcf.RpcContact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.RpcContact
         * @static
         * @param {wcf.IRpcContact} message RpcContact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcContact.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcContact message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.RpcContact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.RpcContact} RpcContact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcContact.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.RpcContact();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.wxid = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                case 3: {
                        message.remark = reader.string();
                        break;
                    }
                case 4: {
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.country = reader.string();
                        break;
                    }
                case 6: {
                        message.province = reader.string();
                        break;
                    }
                case 7: {
                        message.city = reader.string();
                        break;
                    }
                case 8: {
                        message.gender = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcContact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.RpcContact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.RpcContact} RpcContact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcContact.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcContact message.
         * @function verify
         * @memberof wcf.RpcContact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcContact.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                if (!$util.isString(message.wxid))
                    return "wxid: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.province != null && message.hasOwnProperty("province"))
                if (!$util.isString(message.province))
                    return "province: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            return null;
        };

        /**
         * Creates a RpcContact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.RpcContact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.RpcContact} RpcContact
         */
        RpcContact.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.RpcContact)
                return object;
            let message = new $root.wcf.RpcContact();
            if (object.wxid != null)
                message.wxid = String(object.wxid);
            if (object.code != null)
                message.code = String(object.code);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.name != null)
                message.name = String(object.name);
            if (object.country != null)
                message.country = String(object.country);
            if (object.province != null)
                message.province = String(object.province);
            if (object.city != null)
                message.city = String(object.city);
            if (object.gender != null)
                message.gender = object.gender | 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcContact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.RpcContact
         * @static
         * @param {wcf.RpcContact} message RpcContact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcContact.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.wxid = "";
                object.code = "";
                object.remark = "";
                object.name = "";
                object.country = "";
                object.province = "";
                object.city = "";
                object.gender = 0;
            }
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                object.wxid = message.wxid;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.province != null && message.hasOwnProperty("province"))
                object.province = message.province;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            return object;
        };

        /**
         * Converts this RpcContact to JSON.
         * @function toJSON
         * @memberof wcf.RpcContact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcContact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcContact
         * @function getTypeUrl
         * @memberof wcf.RpcContact
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcContact.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.RpcContact";
        };

        return RpcContact;
    })();

    wcf.RpcContacts = (function() {

        /**
         * Properties of a RpcContacts.
         * @memberof wcf
         * @interface IRpcContacts
         * @property {Array.<wcf.IRpcContact>|null} [contacts] RpcContacts contacts
         */

        /**
         * Constructs a new RpcContacts.
         * @memberof wcf
         * @classdesc Represents a RpcContacts.
         * @implements IRpcContacts
         * @constructor
         * @param {wcf.IRpcContacts=} [properties] Properties to set
         */
        function RpcContacts(properties) {
            this.contacts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcContacts contacts.
         * @member {Array.<wcf.IRpcContact>} contacts
         * @memberof wcf.RpcContacts
         * @instance
         */
        RpcContacts.prototype.contacts = $util.emptyArray;

        /**
         * Creates a new RpcContacts instance using the specified properties.
         * @function create
         * @memberof wcf.RpcContacts
         * @static
         * @param {wcf.IRpcContacts=} [properties] Properties to set
         * @returns {wcf.RpcContacts} RpcContacts instance
         */
        RpcContacts.create = function create(properties) {
            return new RpcContacts(properties);
        };

        /**
         * Encodes the specified RpcContacts message. Does not implicitly {@link wcf.RpcContacts.verify|verify} messages.
         * @function encode
         * @memberof wcf.RpcContacts
         * @static
         * @param {wcf.IRpcContacts} message RpcContacts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcContacts.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contacts != null && message.contacts.length)
                for (let i = 0; i < message.contacts.length; ++i)
                    $root.wcf.RpcContact.encode(message.contacts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RpcContacts message, length delimited. Does not implicitly {@link wcf.RpcContacts.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.RpcContacts
         * @static
         * @param {wcf.IRpcContacts} message RpcContacts message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcContacts.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcContacts message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.RpcContacts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.RpcContacts} RpcContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcContacts.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.RpcContacts();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.contacts && message.contacts.length))
                            message.contacts = [];
                        message.contacts.push($root.wcf.RpcContact.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcContacts message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.RpcContacts
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.RpcContacts} RpcContacts
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcContacts.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcContacts message.
         * @function verify
         * @memberof wcf.RpcContacts
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcContacts.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contacts != null && message.hasOwnProperty("contacts")) {
                if (!Array.isArray(message.contacts))
                    return "contacts: array expected";
                for (let i = 0; i < message.contacts.length; ++i) {
                    let error = $root.wcf.RpcContact.verify(message.contacts[i]);
                    if (error)
                        return "contacts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RpcContacts message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.RpcContacts
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.RpcContacts} RpcContacts
         */
        RpcContacts.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.RpcContacts)
                return object;
            let message = new $root.wcf.RpcContacts();
            if (object.contacts) {
                if (!Array.isArray(object.contacts))
                    throw TypeError(".wcf.RpcContacts.contacts: array expected");
                message.contacts = [];
                for (let i = 0; i < object.contacts.length; ++i) {
                    if (typeof object.contacts[i] !== "object")
                        throw TypeError(".wcf.RpcContacts.contacts: object expected");
                    message.contacts[i] = $root.wcf.RpcContact.fromObject(object.contacts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RpcContacts message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.RpcContacts
         * @static
         * @param {wcf.RpcContacts} message RpcContacts
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcContacts.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.contacts = [];
            if (message.contacts && message.contacts.length) {
                object.contacts = [];
                for (let j = 0; j < message.contacts.length; ++j)
                    object.contacts[j] = $root.wcf.RpcContact.toObject(message.contacts[j], options);
            }
            return object;
        };

        /**
         * Converts this RpcContacts to JSON.
         * @function toJSON
         * @memberof wcf.RpcContacts
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcContacts.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcContacts
         * @function getTypeUrl
         * @memberof wcf.RpcContacts
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcContacts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.RpcContacts";
        };

        return RpcContacts;
    })();

    wcf.DbNames = (function() {

        /**
         * Properties of a DbNames.
         * @memberof wcf
         * @interface IDbNames
         * @property {Array.<string>|null} [names] DbNames names
         */

        /**
         * Constructs a new DbNames.
         * @memberof wcf
         * @classdesc Represents a DbNames.
         * @implements IDbNames
         * @constructor
         * @param {wcf.IDbNames=} [properties] Properties to set
         */
        function DbNames(properties) {
            this.names = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbNames names.
         * @member {Array.<string>} names
         * @memberof wcf.DbNames
         * @instance
         */
        DbNames.prototype.names = $util.emptyArray;

        /**
         * Creates a new DbNames instance using the specified properties.
         * @function create
         * @memberof wcf.DbNames
         * @static
         * @param {wcf.IDbNames=} [properties] Properties to set
         * @returns {wcf.DbNames} DbNames instance
         */
        DbNames.create = function create(properties) {
            return new DbNames(properties);
        };

        /**
         * Encodes the specified DbNames message. Does not implicitly {@link wcf.DbNames.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbNames
         * @static
         * @param {wcf.IDbNames} message DbNames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbNames.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.names != null && message.names.length)
                for (let i = 0; i < message.names.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.names[i]);
            return writer;
        };

        /**
         * Encodes the specified DbNames message, length delimited. Does not implicitly {@link wcf.DbNames.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbNames
         * @static
         * @param {wcf.IDbNames} message DbNames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbNames.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbNames message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbNames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbNames} DbNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbNames.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbNames();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.names && message.names.length))
                            message.names = [];
                        message.names.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbNames message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbNames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbNames} DbNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbNames.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbNames message.
         * @function verify
         * @memberof wcf.DbNames
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbNames.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.names != null && message.hasOwnProperty("names")) {
                if (!Array.isArray(message.names))
                    return "names: array expected";
                for (let i = 0; i < message.names.length; ++i)
                    if (!$util.isString(message.names[i]))
                        return "names: string[] expected";
            }
            return null;
        };

        /**
         * Creates a DbNames message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbNames
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbNames} DbNames
         */
        DbNames.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbNames)
                return object;
            let message = new $root.wcf.DbNames();
            if (object.names) {
                if (!Array.isArray(object.names))
                    throw TypeError(".wcf.DbNames.names: array expected");
                message.names = [];
                for (let i = 0; i < object.names.length; ++i)
                    message.names[i] = String(object.names[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a DbNames message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbNames
         * @static
         * @param {wcf.DbNames} message DbNames
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbNames.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.names = [];
            if (message.names && message.names.length) {
                object.names = [];
                for (let j = 0; j < message.names.length; ++j)
                    object.names[j] = message.names[j];
            }
            return object;
        };

        /**
         * Converts this DbNames to JSON.
         * @function toJSON
         * @memberof wcf.DbNames
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbNames.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbNames
         * @function getTypeUrl
         * @memberof wcf.DbNames
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbNames.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbNames";
        };

        return DbNames;
    })();

    wcf.DbTable = (function() {

        /**
         * Properties of a DbTable.
         * @memberof wcf
         * @interface IDbTable
         * @property {string|null} [name] DbTable name
         * @property {string|null} [sql] DbTable sql
         */

        /**
         * Constructs a new DbTable.
         * @memberof wcf
         * @classdesc Represents a DbTable.
         * @implements IDbTable
         * @constructor
         * @param {wcf.IDbTable=} [properties] Properties to set
         */
        function DbTable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbTable name.
         * @member {string} name
         * @memberof wcf.DbTable
         * @instance
         */
        DbTable.prototype.name = "";

        /**
         * DbTable sql.
         * @member {string} sql
         * @memberof wcf.DbTable
         * @instance
         */
        DbTable.prototype.sql = "";

        /**
         * Creates a new DbTable instance using the specified properties.
         * @function create
         * @memberof wcf.DbTable
         * @static
         * @param {wcf.IDbTable=} [properties] Properties to set
         * @returns {wcf.DbTable} DbTable instance
         */
        DbTable.create = function create(properties) {
            return new DbTable(properties);
        };

        /**
         * Encodes the specified DbTable message. Does not implicitly {@link wcf.DbTable.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbTable
         * @static
         * @param {wcf.IDbTable} message DbTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.sql != null && Object.hasOwnProperty.call(message, "sql"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sql);
            return writer;
        };

        /**
         * Encodes the specified DbTable message, length delimited. Does not implicitly {@link wcf.DbTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbTable
         * @static
         * @param {wcf.IDbTable} message DbTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbTable message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbTable} DbTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbTable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.sql = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbTable} DbTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbTable message.
         * @function verify
         * @memberof wcf.DbTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sql != null && message.hasOwnProperty("sql"))
                if (!$util.isString(message.sql))
                    return "sql: string expected";
            return null;
        };

        /**
         * Creates a DbTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbTable} DbTable
         */
        DbTable.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbTable)
                return object;
            let message = new $root.wcf.DbTable();
            if (object.name != null)
                message.name = String(object.name);
            if (object.sql != null)
                message.sql = String(object.sql);
            return message;
        };

        /**
         * Creates a plain object from a DbTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbTable
         * @static
         * @param {wcf.DbTable} message DbTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.sql = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sql != null && message.hasOwnProperty("sql"))
                object.sql = message.sql;
            return object;
        };

        /**
         * Converts this DbTable to JSON.
         * @function toJSON
         * @memberof wcf.DbTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbTable
         * @function getTypeUrl
         * @memberof wcf.DbTable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbTable";
        };

        return DbTable;
    })();

    wcf.DbTables = (function() {

        /**
         * Properties of a DbTables.
         * @memberof wcf
         * @interface IDbTables
         * @property {Array.<wcf.IDbTable>|null} [tables] DbTables tables
         */

        /**
         * Constructs a new DbTables.
         * @memberof wcf
         * @classdesc Represents a DbTables.
         * @implements IDbTables
         * @constructor
         * @param {wcf.IDbTables=} [properties] Properties to set
         */
        function DbTables(properties) {
            this.tables = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbTables tables.
         * @member {Array.<wcf.IDbTable>} tables
         * @memberof wcf.DbTables
         * @instance
         */
        DbTables.prototype.tables = $util.emptyArray;

        /**
         * Creates a new DbTables instance using the specified properties.
         * @function create
         * @memberof wcf.DbTables
         * @static
         * @param {wcf.IDbTables=} [properties] Properties to set
         * @returns {wcf.DbTables} DbTables instance
         */
        DbTables.create = function create(properties) {
            return new DbTables(properties);
        };

        /**
         * Encodes the specified DbTables message. Does not implicitly {@link wcf.DbTables.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbTables
         * @static
         * @param {wcf.IDbTables} message DbTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbTables.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.wcf.DbTable.encode(message.tables[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DbTables message, length delimited. Does not implicitly {@link wcf.DbTables.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbTables
         * @static
         * @param {wcf.IDbTables} message DbTables message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbTables.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbTables message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbTables} DbTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbTables.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbTables();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.tables && message.tables.length))
                            message.tables = [];
                        message.tables.push($root.wcf.DbTable.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbTables message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbTables
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbTables} DbTables
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbTables.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbTables message.
         * @function verify
         * @memberof wcf.DbTables
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbTables.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.wcf.DbTable.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DbTables message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbTables
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbTables} DbTables
         */
        DbTables.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbTables)
                return object;
            let message = new $root.wcf.DbTables();
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".wcf.DbTables.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".wcf.DbTables.tables: object expected");
                    message.tables[i] = $root.wcf.DbTable.fromObject(object.tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DbTables message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbTables
         * @static
         * @param {wcf.DbTables} message DbTables
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbTables.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.wcf.DbTable.toObject(message.tables[j], options);
            }
            return object;
        };

        /**
         * Converts this DbTables to JSON.
         * @function toJSON
         * @memberof wcf.DbTables
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbTables.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbTables
         * @function getTypeUrl
         * @memberof wcf.DbTables
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbTables";
        };

        return DbTables;
    })();

    wcf.DbQuery = (function() {

        /**
         * Properties of a DbQuery.
         * @memberof wcf
         * @interface IDbQuery
         * @property {string|null} [db] DbQuery db
         * @property {string|null} [sql] DbQuery sql
         */

        /**
         * Constructs a new DbQuery.
         * @memberof wcf
         * @classdesc Represents a DbQuery.
         * @implements IDbQuery
         * @constructor
         * @param {wcf.IDbQuery=} [properties] Properties to set
         */
        function DbQuery(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbQuery db.
         * @member {string} db
         * @memberof wcf.DbQuery
         * @instance
         */
        DbQuery.prototype.db = "";

        /**
         * DbQuery sql.
         * @member {string} sql
         * @memberof wcf.DbQuery
         * @instance
         */
        DbQuery.prototype.sql = "";

        /**
         * Creates a new DbQuery instance using the specified properties.
         * @function create
         * @memberof wcf.DbQuery
         * @static
         * @param {wcf.IDbQuery=} [properties] Properties to set
         * @returns {wcf.DbQuery} DbQuery instance
         */
        DbQuery.create = function create(properties) {
            return new DbQuery(properties);
        };

        /**
         * Encodes the specified DbQuery message. Does not implicitly {@link wcf.DbQuery.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbQuery
         * @static
         * @param {wcf.IDbQuery} message DbQuery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbQuery.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.db != null && Object.hasOwnProperty.call(message, "db"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.db);
            if (message.sql != null && Object.hasOwnProperty.call(message, "sql"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sql);
            return writer;
        };

        /**
         * Encodes the specified DbQuery message, length delimited. Does not implicitly {@link wcf.DbQuery.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbQuery
         * @static
         * @param {wcf.IDbQuery} message DbQuery message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbQuery.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbQuery message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbQuery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbQuery} DbQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbQuery.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbQuery();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.db = reader.string();
                        break;
                    }
                case 2: {
                        message.sql = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbQuery message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbQuery
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbQuery} DbQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbQuery.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbQuery message.
         * @function verify
         * @memberof wcf.DbQuery
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbQuery.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.db != null && message.hasOwnProperty("db"))
                if (!$util.isString(message.db))
                    return "db: string expected";
            if (message.sql != null && message.hasOwnProperty("sql"))
                if (!$util.isString(message.sql))
                    return "sql: string expected";
            return null;
        };

        /**
         * Creates a DbQuery message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbQuery
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbQuery} DbQuery
         */
        DbQuery.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbQuery)
                return object;
            let message = new $root.wcf.DbQuery();
            if (object.db != null)
                message.db = String(object.db);
            if (object.sql != null)
                message.sql = String(object.sql);
            return message;
        };

        /**
         * Creates a plain object from a DbQuery message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbQuery
         * @static
         * @param {wcf.DbQuery} message DbQuery
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbQuery.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.db = "";
                object.sql = "";
            }
            if (message.db != null && message.hasOwnProperty("db"))
                object.db = message.db;
            if (message.sql != null && message.hasOwnProperty("sql"))
                object.sql = message.sql;
            return object;
        };

        /**
         * Converts this DbQuery to JSON.
         * @function toJSON
         * @memberof wcf.DbQuery
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbQuery.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbQuery
         * @function getTypeUrl
         * @memberof wcf.DbQuery
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbQuery";
        };

        return DbQuery;
    })();

    wcf.DbField = (function() {

        /**
         * Properties of a DbField.
         * @memberof wcf
         * @interface IDbField
         * @property {number|null} [type] DbField type
         * @property {string|null} [column] DbField column
         * @property {Uint8Array|null} [content] DbField content
         */

        /**
         * Constructs a new DbField.
         * @memberof wcf
         * @classdesc Represents a DbField.
         * @implements IDbField
         * @constructor
         * @param {wcf.IDbField=} [properties] Properties to set
         */
        function DbField(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbField type.
         * @member {number} type
         * @memberof wcf.DbField
         * @instance
         */
        DbField.prototype.type = 0;

        /**
         * DbField column.
         * @member {string} column
         * @memberof wcf.DbField
         * @instance
         */
        DbField.prototype.column = "";

        /**
         * DbField content.
         * @member {Uint8Array} content
         * @memberof wcf.DbField
         * @instance
         */
        DbField.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new DbField instance using the specified properties.
         * @function create
         * @memberof wcf.DbField
         * @static
         * @param {wcf.IDbField=} [properties] Properties to set
         * @returns {wcf.DbField} DbField instance
         */
        DbField.create = function create(properties) {
            return new DbField(properties);
        };

        /**
         * Encodes the specified DbField message. Does not implicitly {@link wcf.DbField.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbField
         * @static
         * @param {wcf.IDbField} message DbField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.column);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified DbField message, length delimited. Does not implicitly {@link wcf.DbField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbField
         * @static
         * @param {wcf.IDbField} message DbField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbField message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbField} DbField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbField();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.column = reader.string();
                        break;
                    }
                case 3: {
                        message.content = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbField} DbField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbField message.
         * @function verify
         * @memberof wcf.DbField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isString(message.column))
                    return "column: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a DbField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbField} DbField
         */
        DbField.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbField)
                return object;
            let message = new $root.wcf.DbField();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.column != null)
                message.column = String(object.column);
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a DbField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbField
         * @static
         * @param {wcf.DbField} message DbField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.column = "";
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this DbField to JSON.
         * @function toJSON
         * @memberof wcf.DbField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbField
         * @function getTypeUrl
         * @memberof wcf.DbField
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbField.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbField";
        };

        return DbField;
    })();

    wcf.DbRow = (function() {

        /**
         * Properties of a DbRow.
         * @memberof wcf
         * @interface IDbRow
         * @property {Array.<wcf.IDbField>|null} [fields] DbRow fields
         */

        /**
         * Constructs a new DbRow.
         * @memberof wcf
         * @classdesc Represents a DbRow.
         * @implements IDbRow
         * @constructor
         * @param {wcf.IDbRow=} [properties] Properties to set
         */
        function DbRow(properties) {
            this.fields = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbRow fields.
         * @member {Array.<wcf.IDbField>} fields
         * @memberof wcf.DbRow
         * @instance
         */
        DbRow.prototype.fields = $util.emptyArray;

        /**
         * Creates a new DbRow instance using the specified properties.
         * @function create
         * @memberof wcf.DbRow
         * @static
         * @param {wcf.IDbRow=} [properties] Properties to set
         * @returns {wcf.DbRow} DbRow instance
         */
        DbRow.create = function create(properties) {
            return new DbRow(properties);
        };

        /**
         * Encodes the specified DbRow message. Does not implicitly {@link wcf.DbRow.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbRow
         * @static
         * @param {wcf.IDbRow} message DbRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbRow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fields != null && message.fields.length)
                for (let i = 0; i < message.fields.length; ++i)
                    $root.wcf.DbField.encode(message.fields[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DbRow message, length delimited. Does not implicitly {@link wcf.DbRow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbRow
         * @static
         * @param {wcf.IDbRow} message DbRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbRow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbRow message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbRow} DbRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbRow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbRow();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.fields && message.fields.length))
                            message.fields = [];
                        message.fields.push($root.wcf.DbField.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbRow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbRow} DbRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbRow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbRow message.
         * @function verify
         * @memberof wcf.DbRow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbRow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fields != null && message.hasOwnProperty("fields")) {
                if (!Array.isArray(message.fields))
                    return "fields: array expected";
                for (let i = 0; i < message.fields.length; ++i) {
                    let error = $root.wcf.DbField.verify(message.fields[i]);
                    if (error)
                        return "fields." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DbRow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbRow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbRow} DbRow
         */
        DbRow.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbRow)
                return object;
            let message = new $root.wcf.DbRow();
            if (object.fields) {
                if (!Array.isArray(object.fields))
                    throw TypeError(".wcf.DbRow.fields: array expected");
                message.fields = [];
                for (let i = 0; i < object.fields.length; ++i) {
                    if (typeof object.fields[i] !== "object")
                        throw TypeError(".wcf.DbRow.fields: object expected");
                    message.fields[i] = $root.wcf.DbField.fromObject(object.fields[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DbRow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbRow
         * @static
         * @param {wcf.DbRow} message DbRow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbRow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fields = [];
            if (message.fields && message.fields.length) {
                object.fields = [];
                for (let j = 0; j < message.fields.length; ++j)
                    object.fields[j] = $root.wcf.DbField.toObject(message.fields[j], options);
            }
            return object;
        };

        /**
         * Converts this DbRow to JSON.
         * @function toJSON
         * @memberof wcf.DbRow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbRow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbRow
         * @function getTypeUrl
         * @memberof wcf.DbRow
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbRow";
        };

        return DbRow;
    })();

    wcf.DbRows = (function() {

        /**
         * Properties of a DbRows.
         * @memberof wcf
         * @interface IDbRows
         * @property {Array.<wcf.IDbRow>|null} [rows] DbRows rows
         */

        /**
         * Constructs a new DbRows.
         * @memberof wcf
         * @classdesc Represents a DbRows.
         * @implements IDbRows
         * @constructor
         * @param {wcf.IDbRows=} [properties] Properties to set
         */
        function DbRows(properties) {
            this.rows = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DbRows rows.
         * @member {Array.<wcf.IDbRow>} rows
         * @memberof wcf.DbRows
         * @instance
         */
        DbRows.prototype.rows = $util.emptyArray;

        /**
         * Creates a new DbRows instance using the specified properties.
         * @function create
         * @memberof wcf.DbRows
         * @static
         * @param {wcf.IDbRows=} [properties] Properties to set
         * @returns {wcf.DbRows} DbRows instance
         */
        DbRows.create = function create(properties) {
            return new DbRows(properties);
        };

        /**
         * Encodes the specified DbRows message. Does not implicitly {@link wcf.DbRows.verify|verify} messages.
         * @function encode
         * @memberof wcf.DbRows
         * @static
         * @param {wcf.IDbRows} message DbRows message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbRows.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rows != null && message.rows.length)
                for (let i = 0; i < message.rows.length; ++i)
                    $root.wcf.DbRow.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DbRows message, length delimited. Does not implicitly {@link wcf.DbRows.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DbRows
         * @static
         * @param {wcf.IDbRows} message DbRows message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DbRows.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DbRows message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DbRows
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DbRows} DbRows
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbRows.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DbRows();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.wcf.DbRow.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DbRows message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DbRows
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DbRows} DbRows
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DbRows.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DbRows message.
         * @function verify
         * @memberof wcf.DbRows
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DbRows.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rows != null && message.hasOwnProperty("rows")) {
                if (!Array.isArray(message.rows))
                    return "rows: array expected";
                for (let i = 0; i < message.rows.length; ++i) {
                    let error = $root.wcf.DbRow.verify(message.rows[i]);
                    if (error)
                        return "rows." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DbRows message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DbRows
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DbRows} DbRows
         */
        DbRows.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DbRows)
                return object;
            let message = new $root.wcf.DbRows();
            if (object.rows) {
                if (!Array.isArray(object.rows))
                    throw TypeError(".wcf.DbRows.rows: array expected");
                message.rows = [];
                for (let i = 0; i < object.rows.length; ++i) {
                    if (typeof object.rows[i] !== "object")
                        throw TypeError(".wcf.DbRows.rows: object expected");
                    message.rows[i] = $root.wcf.DbRow.fromObject(object.rows[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DbRows message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DbRows
         * @static
         * @param {wcf.DbRows} message DbRows
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DbRows.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rows = [];
            if (message.rows && message.rows.length) {
                object.rows = [];
                for (let j = 0; j < message.rows.length; ++j)
                    object.rows[j] = $root.wcf.DbRow.toObject(message.rows[j], options);
            }
            return object;
        };

        /**
         * Converts this DbRows to JSON.
         * @function toJSON
         * @memberof wcf.DbRows
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DbRows.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DbRows
         * @function getTypeUrl
         * @memberof wcf.DbRows
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DbRows.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DbRows";
        };

        return DbRows;
    })();

    wcf.Verification = (function() {

        /**
         * Properties of a Verification.
         * @memberof wcf
         * @interface IVerification
         * @property {string|null} [v3] Verification v3
         * @property {string|null} [v4] Verification v4
         * @property {number|null} [scene] Verification scene
         */

        /**
         * Constructs a new Verification.
         * @memberof wcf
         * @classdesc Represents a Verification.
         * @implements IVerification
         * @constructor
         * @param {wcf.IVerification=} [properties] Properties to set
         */
        function Verification(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Verification v3.
         * @member {string} v3
         * @memberof wcf.Verification
         * @instance
         */
        Verification.prototype.v3 = "";

        /**
         * Verification v4.
         * @member {string} v4
         * @memberof wcf.Verification
         * @instance
         */
        Verification.prototype.v4 = "";

        /**
         * Verification scene.
         * @member {number} scene
         * @memberof wcf.Verification
         * @instance
         */
        Verification.prototype.scene = 0;

        /**
         * Creates a new Verification instance using the specified properties.
         * @function create
         * @memberof wcf.Verification
         * @static
         * @param {wcf.IVerification=} [properties] Properties to set
         * @returns {wcf.Verification} Verification instance
         */
        Verification.create = function create(properties) {
            return new Verification(properties);
        };

        /**
         * Encodes the specified Verification message. Does not implicitly {@link wcf.Verification.verify|verify} messages.
         * @function encode
         * @memberof wcf.Verification
         * @static
         * @param {wcf.IVerification} message Verification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Verification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v3 != null && Object.hasOwnProperty.call(message, "v3"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.v3);
            if (message.v4 != null && Object.hasOwnProperty.call(message, "v4"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.v4);
            if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scene);
            return writer;
        };

        /**
         * Encodes the specified Verification message, length delimited. Does not implicitly {@link wcf.Verification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.Verification
         * @static
         * @param {wcf.IVerification} message Verification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Verification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Verification message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.Verification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.Verification} Verification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Verification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.Verification();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.v3 = reader.string();
                        break;
                    }
                case 2: {
                        message.v4 = reader.string();
                        break;
                    }
                case 3: {
                        message.scene = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Verification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.Verification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.Verification} Verification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Verification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Verification message.
         * @function verify
         * @memberof wcf.Verification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Verification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.v3 != null && message.hasOwnProperty("v3"))
                if (!$util.isString(message.v3))
                    return "v3: string expected";
            if (message.v4 != null && message.hasOwnProperty("v4"))
                if (!$util.isString(message.v4))
                    return "v4: string expected";
            if (message.scene != null && message.hasOwnProperty("scene"))
                if (!$util.isInteger(message.scene))
                    return "scene: integer expected";
            return null;
        };

        /**
         * Creates a Verification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.Verification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.Verification} Verification
         */
        Verification.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.Verification)
                return object;
            let message = new $root.wcf.Verification();
            if (object.v3 != null)
                message.v3 = String(object.v3);
            if (object.v4 != null)
                message.v4 = String(object.v4);
            if (object.scene != null)
                message.scene = object.scene | 0;
            return message;
        };

        /**
         * Creates a plain object from a Verification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.Verification
         * @static
         * @param {wcf.Verification} message Verification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Verification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.v3 = "";
                object.v4 = "";
                object.scene = 0;
            }
            if (message.v3 != null && message.hasOwnProperty("v3"))
                object.v3 = message.v3;
            if (message.v4 != null && message.hasOwnProperty("v4"))
                object.v4 = message.v4;
            if (message.scene != null && message.hasOwnProperty("scene"))
                object.scene = message.scene;
            return object;
        };

        /**
         * Converts this Verification to JSON.
         * @function toJSON
         * @memberof wcf.Verification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Verification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Verification
         * @function getTypeUrl
         * @memberof wcf.Verification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Verification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.Verification";
        };

        return Verification;
    })();

    wcf.AddMembers = (function() {

        /**
         * Properties of an AddMembers.
         * @memberof wcf
         * @interface IAddMembers
         * @property {string|null} [roomid] AddMembers roomid
         * @property {string|null} [wxids] AddMembers wxids
         */

        /**
         * Constructs a new AddMembers.
         * @memberof wcf
         * @classdesc Represents an AddMembers.
         * @implements IAddMembers
         * @constructor
         * @param {wcf.IAddMembers=} [properties] Properties to set
         */
        function AddMembers(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddMembers roomid.
         * @member {string} roomid
         * @memberof wcf.AddMembers
         * @instance
         */
        AddMembers.prototype.roomid = "";

        /**
         * AddMembers wxids.
         * @member {string} wxids
         * @memberof wcf.AddMembers
         * @instance
         */
        AddMembers.prototype.wxids = "";

        /**
         * Creates a new AddMembers instance using the specified properties.
         * @function create
         * @memberof wcf.AddMembers
         * @static
         * @param {wcf.IAddMembers=} [properties] Properties to set
         * @returns {wcf.AddMembers} AddMembers instance
         */
        AddMembers.create = function create(properties) {
            return new AddMembers(properties);
        };

        /**
         * Encodes the specified AddMembers message. Does not implicitly {@link wcf.AddMembers.verify|verify} messages.
         * @function encode
         * @memberof wcf.AddMembers
         * @static
         * @param {wcf.IAddMembers} message AddMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMembers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomid != null && Object.hasOwnProperty.call(message, "roomid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomid);
            if (message.wxids != null && Object.hasOwnProperty.call(message, "wxids"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.wxids);
            return writer;
        };

        /**
         * Encodes the specified AddMembers message, length delimited. Does not implicitly {@link wcf.AddMembers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.AddMembers
         * @static
         * @param {wcf.IAddMembers} message AddMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddMembers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddMembers message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.AddMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.AddMembers} AddMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMembers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.AddMembers();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.roomid = reader.string();
                        break;
                    }
                case 2: {
                        message.wxids = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddMembers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.AddMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.AddMembers} AddMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddMembers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddMembers message.
         * @function verify
         * @memberof wcf.AddMembers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddMembers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isString(message.roomid))
                    return "roomid: string expected";
            if (message.wxids != null && message.hasOwnProperty("wxids"))
                if (!$util.isString(message.wxids))
                    return "wxids: string expected";
            return null;
        };

        /**
         * Creates an AddMembers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.AddMembers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.AddMembers} AddMembers
         */
        AddMembers.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.AddMembers)
                return object;
            let message = new $root.wcf.AddMembers();
            if (object.roomid != null)
                message.roomid = String(object.roomid);
            if (object.wxids != null)
                message.wxids = String(object.wxids);
            return message;
        };

        /**
         * Creates a plain object from an AddMembers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.AddMembers
         * @static
         * @param {wcf.AddMembers} message AddMembers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddMembers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.roomid = "";
                object.wxids = "";
            }
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            if (message.wxids != null && message.hasOwnProperty("wxids"))
                object.wxids = message.wxids;
            return object;
        };

        /**
         * Converts this AddMembers to JSON.
         * @function toJSON
         * @memberof wcf.AddMembers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddMembers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddMembers
         * @function getTypeUrl
         * @memberof wcf.AddMembers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddMembers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.AddMembers";
        };

        return AddMembers;
    })();

    wcf.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof wcf
         * @interface IUserInfo
         * @property {string|null} [wxid] UserInfo wxid
         * @property {string|null} [name] UserInfo name
         * @property {string|null} [mobile] UserInfo mobile
         * @property {string|null} [home] UserInfo home
         */

        /**
         * Constructs a new UserInfo.
         * @memberof wcf
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {wcf.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo wxid.
         * @member {string} wxid
         * @memberof wcf.UserInfo
         * @instance
         */
        UserInfo.prototype.wxid = "";

        /**
         * UserInfo name.
         * @member {string} name
         * @memberof wcf.UserInfo
         * @instance
         */
        UserInfo.prototype.name = "";

        /**
         * UserInfo mobile.
         * @member {string} mobile
         * @memberof wcf.UserInfo
         * @instance
         */
        UserInfo.prototype.mobile = "";

        /**
         * UserInfo home.
         * @member {string} home
         * @memberof wcf.UserInfo
         * @instance
         */
        UserInfo.prototype.home = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof wcf.UserInfo
         * @static
         * @param {wcf.IUserInfo=} [properties] Properties to set
         * @returns {wcf.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link wcf.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof wcf.UserInfo
         * @static
         * @param {wcf.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wxid != null && Object.hasOwnProperty.call(message, "wxid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.wxid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.mobile != null && Object.hasOwnProperty.call(message, "mobile"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mobile);
            if (message.home != null && Object.hasOwnProperty.call(message, "home"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.home);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link wcf.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.UserInfo
         * @static
         * @param {wcf.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.UserInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.wxid = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.mobile = reader.string();
                        break;
                    }
                case 4: {
                        message.home = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof wcf.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                if (!$util.isString(message.wxid))
                    return "wxid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                if (!$util.isString(message.mobile))
                    return "mobile: string expected";
            if (message.home != null && message.hasOwnProperty("home"))
                if (!$util.isString(message.home))
                    return "home: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.UserInfo)
                return object;
            let message = new $root.wcf.UserInfo();
            if (object.wxid != null)
                message.wxid = String(object.wxid);
            if (object.name != null)
                message.name = String(object.name);
            if (object.mobile != null)
                message.mobile = String(object.mobile);
            if (object.home != null)
                message.home = String(object.home);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.UserInfo
         * @static
         * @param {wcf.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.wxid = "";
                object.name = "";
                object.mobile = "";
                object.home = "";
            }
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                object.wxid = message.wxid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.mobile != null && message.hasOwnProperty("mobile"))
                object.mobile = message.mobile;
            if (message.home != null && message.hasOwnProperty("home"))
                object.home = message.home;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof wcf.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserInfo
         * @function getTypeUrl
         * @memberof wcf.UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.UserInfo";
        };

        return UserInfo;
    })();

    wcf.DecPath = (function() {

        /**
         * Properties of a DecPath.
         * @memberof wcf
         * @interface IDecPath
         * @property {string|null} [src] DecPath src
         * @property {string|null} [dst] DecPath dst
         */

        /**
         * Constructs a new DecPath.
         * @memberof wcf
         * @classdesc Represents a DecPath.
         * @implements IDecPath
         * @constructor
         * @param {wcf.IDecPath=} [properties] Properties to set
         */
        function DecPath(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DecPath src.
         * @member {string} src
         * @memberof wcf.DecPath
         * @instance
         */
        DecPath.prototype.src = "";

        /**
         * DecPath dst.
         * @member {string} dst
         * @memberof wcf.DecPath
         * @instance
         */
        DecPath.prototype.dst = "";

        /**
         * Creates a new DecPath instance using the specified properties.
         * @function create
         * @memberof wcf.DecPath
         * @static
         * @param {wcf.IDecPath=} [properties] Properties to set
         * @returns {wcf.DecPath} DecPath instance
         */
        DecPath.create = function create(properties) {
            return new DecPath(properties);
        };

        /**
         * Encodes the specified DecPath message. Does not implicitly {@link wcf.DecPath.verify|verify} messages.
         * @function encode
         * @memberof wcf.DecPath
         * @static
         * @param {wcf.IDecPath} message DecPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DecPath.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.src);
            if (message.dst != null && Object.hasOwnProperty.call(message, "dst"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dst);
            return writer;
        };

        /**
         * Encodes the specified DecPath message, length delimited. Does not implicitly {@link wcf.DecPath.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.DecPath
         * @static
         * @param {wcf.IDecPath} message DecPath message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DecPath.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DecPath message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.DecPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.DecPath} DecPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DecPath.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.DecPath();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.src = reader.string();
                        break;
                    }
                case 2: {
                        message.dst = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DecPath message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.DecPath
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.DecPath} DecPath
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DecPath.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DecPath message.
         * @function verify
         * @memberof wcf.DecPath
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DecPath.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src"))
                if (!$util.isString(message.src))
                    return "src: string expected";
            if (message.dst != null && message.hasOwnProperty("dst"))
                if (!$util.isString(message.dst))
                    return "dst: string expected";
            return null;
        };

        /**
         * Creates a DecPath message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.DecPath
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.DecPath} DecPath
         */
        DecPath.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.DecPath)
                return object;
            let message = new $root.wcf.DecPath();
            if (object.src != null)
                message.src = String(object.src);
            if (object.dst != null)
                message.dst = String(object.dst);
            return message;
        };

        /**
         * Creates a plain object from a DecPath message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.DecPath
         * @static
         * @param {wcf.DecPath} message DecPath
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DecPath.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.src = "";
                object.dst = "";
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = message.src;
            if (message.dst != null && message.hasOwnProperty("dst"))
                object.dst = message.dst;
            return object;
        };

        /**
         * Converts this DecPath to JSON.
         * @function toJSON
         * @memberof wcf.DecPath
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DecPath.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DecPath
         * @function getTypeUrl
         * @memberof wcf.DecPath
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DecPath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.DecPath";
        };

        return DecPath;
    })();

    wcf.Transfer = (function() {

        /**
         * Properties of a Transfer.
         * @memberof wcf
         * @interface ITransfer
         * @property {string|null} [wxid] Transfer wxid
         * @property {string|null} [tid] Transfer tid
         */

        /**
         * Constructs a new Transfer.
         * @memberof wcf
         * @classdesc Represents a Transfer.
         * @implements ITransfer
         * @constructor
         * @param {wcf.ITransfer=} [properties] Properties to set
         */
        function Transfer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transfer wxid.
         * @member {string} wxid
         * @memberof wcf.Transfer
         * @instance
         */
        Transfer.prototype.wxid = "";

        /**
         * Transfer tid.
         * @member {string} tid
         * @memberof wcf.Transfer
         * @instance
         */
        Transfer.prototype.tid = "";

        /**
         * Creates a new Transfer instance using the specified properties.
         * @function create
         * @memberof wcf.Transfer
         * @static
         * @param {wcf.ITransfer=} [properties] Properties to set
         * @returns {wcf.Transfer} Transfer instance
         */
        Transfer.create = function create(properties) {
            return new Transfer(properties);
        };

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link wcf.Transfer.verify|verify} messages.
         * @function encode
         * @memberof wcf.Transfer
         * @static
         * @param {wcf.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wxid != null && Object.hasOwnProperty.call(message, "wxid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.wxid);
            if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tid);
            return writer;
        };

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link wcf.Transfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof wcf.Transfer
         * @static
         * @param {wcf.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @function decode
         * @memberof wcf.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {wcf.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.wcf.Transfer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.wxid = reader.string();
                        break;
                    }
                case 2: {
                        message.tid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof wcf.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {wcf.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transfer message.
         * @function verify
         * @memberof wcf.Transfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                if (!$util.isString(message.wxid))
                    return "wxid: string expected";
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (!$util.isString(message.tid))
                    return "tid: string expected";
            return null;
        };

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof wcf.Transfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {wcf.Transfer} Transfer
         */
        Transfer.fromObject = function fromObject(object) {
            if (object instanceof $root.wcf.Transfer)
                return object;
            let message = new $root.wcf.Transfer();
            if (object.wxid != null)
                message.wxid = String(object.wxid);
            if (object.tid != null)
                message.tid = String(object.tid);
            return message;
        };

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof wcf.Transfer
         * @static
         * @param {wcf.Transfer} message Transfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.wxid = "";
                object.tid = "";
            }
            if (message.wxid != null && message.hasOwnProperty("wxid"))
                object.wxid = message.wxid;
            if (message.tid != null && message.hasOwnProperty("tid"))
                object.tid = message.tid;
            return object;
        };

        /**
         * Converts this Transfer to JSON.
         * @function toJSON
         * @memberof wcf.Transfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transfer
         * @function getTypeUrl
         * @memberof wcf.Transfer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transfer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/wcf.Transfer";
        };

        return Transfer;
    })();

    return wcf;
})();

export { $root as default };
