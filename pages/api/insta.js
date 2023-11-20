const Insta = require('scraper-instagram');
const InstaClient = new Insta();



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {


    if(req.method === "GET"){  

       
     let fetchData = await   InstaClient.getPost('Cz2mKlGJEml')
	.then(post =>  post)
	.catch(err => err);

    console.log(fetchData)


        // let insta = `https://www.instagram.com/graphql/query/?query_hash=b3055c01b4b222b8a47dc12b090e4e64&variables={"shortcode":"Cz2mKlGJEml"}`
        // let fetchData = await fetch(insta).then(res => res.json())
        res.status(200).json(fetchData)
    }
    


}
  