const URL = "https://hcfqhzpuwdrtylbnrjjr.supabase.co/rest/v1/flowers"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZnFoenB1d2RydHlsYm5yampyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDI1NzAsImV4cCI6MjAwOTU3ODU3MH0.yRVx-0yCRmumK90BqzXMpYBK6zIhxLZudMC7M5RsmQM"

export async function fetchFlowers(){
    const response = await fetch(URL, {
        headers: {
            apikey: apikey, 
        }
    });
    const body = await response.json();
    console.log(body);

    return body;
}
