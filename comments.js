const { FormData, Method } = require ("vkstatic")
const { dotenv } = require ("dotenv").config ()

const post_id = null
const owner_id = null
const text = ""
const access_token = process.env.TOKEN

const VK_TOKEN = new FormData ({ token: access_token })

const createComment = async () => {
       const getResponse = await new Method ()
       .use ("wall.createComment", { owner_id: owner_id, post_id: post_id, text: text })
      
       if (getResponse.error) {
       if (getResponse.error.error_code == 5) {
        return console.log ("Токен не был определен!")
       }

       if (getResponse.error.error_code == 100) {
        return console.log ("АЙДИ поста не определено")
       }
    }

       console.log(getResponse
        .response ? "Добавлен комментарий " + "(ID:" + getResponse.response.comment_id + ")" : "Ошибка.")
}

setInterval (createComment, 5_000)