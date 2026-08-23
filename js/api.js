import axios from "https://esm.sh/axios";

export async function get_gsv_profile(username) {
    try {
        const response = await axios.get(
            "https://api.globalstatsviewer.com/v3/quicksearch",
            {
                params: {
                    search: username,
                },
            }
        );

        const gsv_response = JSON.parse(response.data);

        return gsv_response.id;
    } catch (error) {
        console.log(error);
        return null;
    }
}