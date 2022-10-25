export const sendCardMail = async (data) => {
  try {
    await fetch("/api/send-card-mail", {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify(data)
    })

  } catch (error) {
    console.log(error)
  }
}