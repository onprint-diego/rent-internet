export const sendTransferMail = async (data) => {
    try {
        await fetch("/api/send-transfer-mail", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
}