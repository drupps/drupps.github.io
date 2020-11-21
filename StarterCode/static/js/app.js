//reading in samples.json
var select_tag = d3.select("selDataset");

d3.json("samples.json").then((importedData) => {
  var subject_ids = importedData.names;

  console.log("Subject_ids");
  console.log(subject_ids);

  subject_ids.forEach((id) => {
    select_tag.append("option").property("value", id).text(id);
  });

  // id=940 for default
  optionChanged(subject_ids[0]);
});

function optionChanged(changed_id) {
  //console.log('changed_id=', changed_id);

  d3.json("samples.json").then((data) => {
    //console.log(data);


    var names = data.names;
    //console.log(names);

    var values = data.samples[0].sample_values.slice(0, 10).reverse();

    //setting up the id's for the top ten and call it OTU!
    var ids = data.samples[0].otu_ids
      .slice(0, 10)
      .map((d) => `OTU ${d}`)
      .reverse();

    //setting up the labels for the top ten samples
    var labels = data.samples[0].otu_labels.slice(0, 10).reverse();

    //Create the bar trace
    var traceBar = {
      x: values,
      y: ids,
      type: "bar",
      name: "Top 10 OTUs",
      text: labels,
      //adding orientation otherwise it is incorrect
      orientation: "h",
    };

    //layout of the bar plot
    var layoutBar = {
      //creating the title with text from the id's
      title: {
        text: `ID: ${values}`,
      },
      xaxis: {
        //xaxis title
        title: "Sample Values",
      },
      yaxis: {
        //yaxis title
        title: "Sample ID",
      },
    };

    //setting up barplot trace to the plotBar var
    var plotBar = [traceBar];

    //actual plotting of the bar
    Plotly.newPlot("bar", plotBar, layoutBar);

    var results = values.filter((sampleObj) => sampleObj.id == changed_id);
    var result = results[0];

    var ids = result.ids;
    var labels = result.labels;
    var values = result.values;

    var bubbleTrace = {
      x: ids,
      y: values,
      text: labels,
      mode: "markers",
      marker: {
        size: values,
        color: ids,
        colorscale: "Green",
      },
    };

    var plotBubble = [bubbleTrace];

    var bubbleLayout = {
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30 },
    };

    Plotly.newPlot("bubble", plotBubble, bubbleLayout);
  });

  // Demo stats
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;

    //console.log(metadata);

    var results = metadata.filter(
      (metadataObj) => metadataObj.id == changed_id
    );
    var result = results[0];

    //console.log(metadata);

    var fig = d3.select("#sample-metadata");

    fig.html("");

    Object.entries(result).forEach(([key, value]) => {
      fig.append("h5").text(`${key}: ${value}`);
    });
  });
}
