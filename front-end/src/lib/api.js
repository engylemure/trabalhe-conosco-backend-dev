export default class Api {
    static headers(token){
        return {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'dataType':'json',
            'Authorization':'Bearer '+token,
        }
    }
    static get(route,token, host){
        return this.request(route, null, 'GET', token, host)
    }
    static put(route, params,token, host){
        return this.request(route, params, 'PUT', token, host)
    }
    static post(route,params,token, host){
        return this.request(route, params,'POST', token, host)
    }

    static delete(route,params,token, host){
        return this.request(route, params,'DELETE', token, host)
    }

    static async request(route, params, verb, token, host) {
        const url = `${host}${route}`
        let body = params ?{body: JSON.stringify(params)}: null
        let options = {method: verb,...body}

        options.headers = Api.headers(token)

        let response;

        try {
            console.log('method: '+verb+', url:'+url)
            response = await fetch(url, options)
        } catch(e){
            throw e
        }

        return response
    }
    static CreateCustomApi(models, host = null){
        let api = {}
        api.host = host
        for (let i in models){
            let model = models[i]
            api[model] = {
                view(id, token, qstring = ''){
                    let route = `/${model}/${id}${qstring}`
                    return Api.get(route, token,host)
                },
                index(token, qstring = ''){
                    let route = `/${model}${qstring}`
                    return Api.get(route, token,host)
                },
                create(params, token, qstring = ''){
                    let route = `/${model}${qstring}`
                    return Api.post(route, params,token, host)
                },
                update(id,params, token, qstring = ''){
                    let route = `/${model}/${id}${qstring}`
                    return Api.put(route, params, token, host)
                },
                delete(id, token){
                    let route = `/${model}/${id}`
                    return Api.put(route,token, host)
                }
            }
        }
        api['default'] =  {
            view(id, token, qstring = ''){
                let route = `/${id}${qstring}`
                return Api.get(route, token,host)
            },
            index(token, qstring = ''){
                let route = `/${qstring}`
                return Api.get(route, token,host)
            },
            create(params, token, qstring = ''){
                let route = `/${qstring}`
                return Api.post(route, params,token, host)
            },
            update(id,params, token, qstring = ''){
                let route = `/${id}${qstring}`
                return Api.put(route, params, token, host)
            },
            delete(id, token){
                let route = `/${id}`
                return Api.put(route,token, host)
            }
        }
        return api
    }
};