let obj = {
    name: "John",
    age: 30,
    job: {
        company: "google",
        address: "USA"
    }
}

function getNestedValue(obj: Record<string, any>, key: string): any {
    const keyList = key.split('.');
    let result: any = obj;

    for (let i = 0; i < keyList.length; i++) {
        result = result[keyList[i]];
    }

    console.log(result);
}

getNestedValue(obj, "job.company") // ожидаемый результат  "google"