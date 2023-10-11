curl --request POST  

    --url https://api.cloudflare.com/client/v4/accounts/6db3c2edb50a5b10950e9f727de07023/request-tracer/tracer     --header 'Content-Type: application/json'  

    --header 'Authorization: Bearer $CF_AUTH_TOKEN'  

    --data '{"url":"https://banana-os.6b277k7j22.repl.co","protocol":"HTTP/3","context":{"threat_score":1}}'