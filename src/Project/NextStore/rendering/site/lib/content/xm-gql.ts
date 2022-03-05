import axios from "axios";

export type XmRouteDetails = {
    title: string
  }

export async function getRouteDetailsFromXM ({
  //  path,
  }: String ) {
    
    //var fullpath = path
    const query = `
    {
      item(path: "/sitecore/content/NextStore/home/") {
        id
        path
        fields (ownFields:true) {
          value
          name
        }
        children {
          name
        }
      }
    }
    `;
    
    // At request level
    const https = require('https');
    const agent = new https.Agent({  
      rejectUnauthorized: false
    });
    
      const response = await axios.post(`https://cm.sitecoredevrel.localhost/sitecore/api/graph/items/master?sc_apikey={AE4A222E-8270-4609-B82B-81B57E9414FF}`, {
        query
      }, { httpsAgent: agent });
    
    var gqlData = response.data; 

    const routeDetails : XmRouteDetails = {
        title : gqlData?.data?.item?.fields[0]?.value
    } 

    return routeDetails;
  }
  