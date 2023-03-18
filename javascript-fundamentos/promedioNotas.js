const getAverageV2 = (...n) => {
    let sumNotes = 0;
    n.forEach((grade, index) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}

const getAverageV3 = (...n) => {
    let sumNotes = 0;
    n.forEach((grade) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}

const getAverageV4 = (...n) => {
    let sumNotes = 0;
    n.map((grade) => {
        sumNotes += grade;
    });
    return (sumNotes) / n.length;
}