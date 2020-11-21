populate the dropdown menu with forEach
while you use the forEach, use .append to append it to the .option
this i think will show it in the dropdown menu.


remember the data in samples.json is a dictionary which has arrays and lists in it.

good job!


//to do: optionChange!
//to do: initial bar chart on page load



    //forEach to populate ?? not entirely sure if this is needed..
    // names.forEach(d => {
    //     d3.select('#selDataset')
    //     .append('option')
    //     .text(d)
    //     .property('value', d)
    // });


    //     //saving variables for the bubble plot
//     var bubbleValues = data.samples[0].sample_values
//     var bubbleIds = data.samples[0].otu_ids
//     var bubbleLabels = data.samples[0].otu_labels 

//     //bubble plot
//     var traceBubble = {
//         // don't need data.??? i already set the variables
//         //x and y values plus text, not sure what to do with this
//         x: bubbleIds,
//         y: bubbleValues,
//         text: bubbleLabels,
//         //setting up the bubble plot marker size and color
//         mode: 'markers',
//         marker:{
//             size: bubbleValues,
//             color: bubbleIds
//         }

//     }

//     var bubblePlot = [traceBubble];

//     Plotly.newPlot('bubble', bubblePlot);

//     d3.json("samples.json").then((data) => {
//         var metadata = data.metadata;
    
//         console.log("metadata");
//         console.log(metadata);
    
//         var results = metadata.filter(metadataObj => metadataObj.id == selected_id);
//         var result = results[0];
    
//         //console.log(metadata)
    
//         var fig = d3.select("#sample-metadata");
    
//         fig.html("");
    
//         Object.entries(result).forEach(([key, value]) => {
//           fig.append("h5").text(`${key}: ${value}`);
//         });
    
//       });

//             // Layout for bubble chart
//       var bubbleLayout = {
//         height: 600,
//         width: 1200,
//         xaxis: {title: "OTU ID"}
//       };      
//       // Use Plotly to plot bubble chart
//       Plotly.newPlot('bubble', traceBubble, bubbleLayout);

//       // CREATE GAUGE CHART
//       // Trace for gauge chart
//       var traceGauge = [
//         {
//         domain: {x: [0, 1], y: [0, 1]},
//         value: sampleMeta[0].wfreq,
//         title: {text: "Belly Button Wash Frequency (Scrubs Per Week)"},
//         type: "indicator",
//         mode: "gauge+number",
//             gauge: {
//               axis: {range: [null, 9]},
//               bar: {color: "blue"},
//               steps: [
//                 {range: [0, 1], color: "darkred"},
//                 {range: [1, 2], color: "red"},
//                 {range: [2, 3], color: "orange"},
//                 {range: [3, 4], color: "gold"},
//                 {range: [4, 5], color: "yellow"},
//                 {range: [5, 6], color: "lightyellow"},
//                 {range: [6, 7], color: "lightgreen"},
//                 {range: [7, 8], color: "green"},
//                 {range: [8, 9], color: "darkgreen"}
//               ],
//             }
//         }
//         ];