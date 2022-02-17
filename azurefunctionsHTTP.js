
module.exports = async function (context, req) {
    context.log('XXX HTTP trigger function processed a request.');

    var status;
    var responseMessage;

    try {
        const mode = req.query.mode || (req.body && req.body.mode);
        
        switch (mode) {
        default:
            throw new Error(ERROR_INVALID_ARG);
            break;
        }
        
        responseMessage = {
            "result": "something."
        };
        status = 200;

    } catch (e) {
        status = 500;
        if (e.message == ERROR_INVALID_ARG) {
            status = 400;
        }
        responseMessage = {
            "result": e.message
        };
        context.log.error(e.message);
    } finally {
        context.res = {
            status: status,
            headers: {"Content-type": "application/json"},
            body: responseMessage
        };
        context.done();    
    }
}
