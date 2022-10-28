export const sendRechargeTransferMail = async (data) => {

    try {
        await fetch("/api/send-transfer-recharge-mail", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}