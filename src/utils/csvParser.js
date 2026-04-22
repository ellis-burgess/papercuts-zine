export function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',');
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const values = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = values[j];
        }
        data.push(obj);
    }

    return data;
}

export async function fetchVolumesData() {
    try {
        const response = await fetch('/data/volumes.csv');
        const csvText = await response.text();
        return parseCSV(csvText);
    } catch (error) {
        console.error('Error fetching volumes data:', error);
        return [];
    }
}

export function getLatestVolume(volumesData) {
    if (volumesData.length === 0) return null;
    return volumesData[volumesData.length - 1];
}
