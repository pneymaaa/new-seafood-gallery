
class DataSource {

    static GetCarouselImages() {
        return new Promise((resolve, reject) => {
            const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
            fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => reject(error))
        })
    }
}

export default DataSource