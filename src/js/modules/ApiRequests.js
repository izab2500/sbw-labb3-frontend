/**
 * Skickar HTTP-förfrågningar till API:et och 
 * hanterar svar samt eventuella nätverksfel.
 */

export class ApiRequests {
    #baseUrl;

    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    async request(id, optionsObj) {
        try {
            const res = await fetch(`${this.#baseUrl}${id === null ? "" : `/${id}`}`, optionsObj);
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            return data;
        } catch (err) {
            console.error(err)
            throw err;
        }
    }

    get() {
        return this.request(null, {
            method: "GET"
        })
    }

    post(body) {
        return this.request(null, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    put(id, body) {
        return this.request(id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
    }

    delete(id) {
        return this.request(id, {
            method: "DELETE"
        })
    }
}