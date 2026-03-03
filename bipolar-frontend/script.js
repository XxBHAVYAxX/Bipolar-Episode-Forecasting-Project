async function predictDisorder() {

    const sadness = document.getElementById("sadness").value;
    const euphoric = document.getElementById("euphoric").value;
    const exhausted = document.getElementById("exhausted").value;

    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Sadness": sadness,
            "Euphoric": euphoric,
            "Exhausted": exhausted
        })
    });

    const result = await response.json();

    document.getElementById("result").innerText =
        "Prediction: " + result.prediction;
}