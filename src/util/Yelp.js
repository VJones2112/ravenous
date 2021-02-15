const apiKey = 'LTz7UVVEEDHd5_mR_k9gOZFFZQDVKiE1ZGW_NpHOwG-yN8rtz0EiXTCxs1YzYa6ZfVRAQ2uwO5Yfbgu5ZwdvhvNNh07Ux9VBe7zMxz8qzfN3VvnnGL2Z56H1E3UlYHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    // console.log(business);
                    // return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.display_address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    // };
                }));
            }
        });
    }
};

export default Yelp;