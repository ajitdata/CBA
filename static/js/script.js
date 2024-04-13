// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

// When the user clicks on "OK", close the modal
document.getElementById("okButton").onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

// To make the modal draggable
dragElement(document.getElementById("modalContent"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown; // for touch
    } else {
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown; // for touch
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - (e.clientX || e.touches[0].clientX);
        pos2 = pos4 - (e.clientY || e.touches[0].clientY);
        pos3 = e.clientX || e.touches[0].clientX;
        pos4 = e.clientY || e.touches[0].clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

function showMetricInfo() {
    var selection = document.getElementById('metric-selection').value;
    var infoDiv = document.getElementById('metric-info');
    switch(selection) {
        case 'NPV':
            infoDiv.innerHTML = `<ul>
			    <li>It represents the difference between the present value of cash inflows and the present value of cash outflows over a period of time.</li>
                <li><strong>Formula:</strong> NPV = Sum of (Net Cash Flow / (1 + Discount Rate)^Time Period) - Initial Investment.</li>
                <li><strong>Comparing Projects:</strong> Useful for comparing the profitability of multiple projects or investment opportunities.</li>
                <li><strong>Time Value of Money:</strong> Incorporates the time value of money, recognizing that a dollar today is worth more than a dollar in the future.</li>
                <li><strong>Decision-Making Tool:</strong> Used extensively in finance and accounting for decision-making in capital budgeting.</li>
                <li><strong>Long-Term Perspective:</strong> NPV takes a long-term view of the investment profitability, considering cash flows over the entire project life.</li>
            </ul>`;

            break;
        case 'ROI':
            infoDiv.innerHTML = `<ul>
                <li>ROI is a financial metric used to evaluate the profitability and efficiency of an investment, comparing its gains to its cost.</li>
                <li><b>Formula:</b> ROI is calculated as (Net Profit / Investment Cost) * 100, often expressed as a percentage.</li>
                <li><b>Performance Measure:</b> It serves as a key performance indicator for assessing the success of an investment or comparing the efficiency of different investments.</li>
                <li><b>Limitations:</b> ROI does not account for the time value of money and may not accurately reflect long-term profitability or risks.</li>
                <li><b>Risk Evaluation:</b> While it measures profitability, ROI does not inherently consider the risks or the time period over which the return is generated.</li>
                <li><b>Decision-Making:</b> Businesses use ROI to evaluate the potential return from a major purchase, investment, or decision, such as marketing campaigns, equipment purchases, or other strategic initiatives.</li>
            </ul>`;            break;
        case 'Payback':
      		infoDiv.innerHTML = `<ul>
                <li>Payback Period is a financial metric that calculates the time it takes for an investment to generate an amount of cash flow equal to the initial cost of the investment.</li> 
                <li><b>Formula</b>: It is determined by dividing the initial investment by the annual cash inflow.</li> 
                <li><b>Capital Budgeting</b>: Widely used in capital budgeting to evaluate and compare the potential profitability of investment opportunities.</li>
                <li><b>Liquidity Indicator</b>: It helps in understanding the liquidity aspect of the investment, indicating how quickly the investment can be turned into cash.</li>
                <li><b>Short-Term Focus</b>: It focuses on short-term profitability and may not reflect the long-term profitability or total returns of a project.</li>
                <li><b>Doesnt Measure Total Profitability</b>: Payback Period does not consider the cash flows that occur after the payback period and thus, doesnt measure the total profitability of a project.</li>
                 </ul>`;
            break;
        default:
      //      infoDiv.innerHTML = 'CBA Content: ...'; // Default content for CBA
		infoDiv.innerHTML = `<ul>
		<b>Assumption:</b>
        <li>Cost Benefit Analysis Tool is designed for One Project analysis at any moment</li>
        <li>"Initial Investment($)(i.e. Cost Of Investment)","Annual Expected Revenue($)(i.e. Net Cash Flow at specific Year)","Required Rate Of Return(%)(i.e. discount rate)" and "Time Periods(Yrs)" are used to derive "NPV"</li>
        <li>"Initial Investment($)(i.e. Cost of Investment)","Annual Expected Revenue($)(i.e. Total Return on Investment)" are used to derive "ROI"</li>
        <li>"Initial Investment($)","Annual Cash Flow($)" are used to derive "Payback Period"</li>
			</ul>`;
    }
}

// Use addEventListener for window load
window.addEventListener('load', function() {
    document.getElementById("myModal").style.display = "block";
    showMetricInfo();
});
