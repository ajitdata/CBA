import plotly.figure_factory as ff

# Tasks data
tasks = [
    {"Task": "Define core functionalities", "Start": "2023-10-24", "Finish": "2023-10-31", "Resource": "Group"},
    {"Task": "finalize project charter", "Start": "2023-10-30", "Finish": "2023-10-31", "Resource": "Group"},
    {"Task": "Set up Gantt chart", "Start": "2023-10-30", "Finish": "2023-10-31", "Resource": "Project Manager"},
    {"Task": "Development of Basic Version", "Start": "2023-10-31", "Finish": "2023-11-07", "Resource": "Group"},
    {"Task": "Coding IO system", "Start": "2023-11-01", "Finish": "2023-11-06", "Resource": "Developer"},
    {"Task": "Develop ROI formula", "Start": "2023-11-01", "Finish": "2023-11-04", "Resource": "Product Manager"},
    {"Task": "Create user scenarios", "Start": "2023-11-01", "Finish": "2023-11-04", "Resource": "Product Manager"},
    {"Task": "QA Testing", "Start": "2023-11-07", "Finish": "2023-11-14", "Resource": "QA"},
    {"Task": "Refine scenario", "Start": "2023-11-07", "Finish": "2023-11-21", "Resource": "Product Manager"},
    {"Task": "Review iteration", "Start": "2023-11-07", "Finish": "2023-11-07", "Resource": "Group"},
    {"Task": "Focus group testing", "Start": "2023-11-07", "Finish": "2023-11-21", "Resource": "Project Manager"},
    {"Task": "Create prototypes", "Start": "2023-11-07", "Finish": "2023-11-14", "Resource": "Product Manager"},
    {"Task": "Review feedback", "Start": "2023-11-07", "Finish": "2023-11-07", "Resource": "Project Manager"},
    {"Task": "Visualize ROI changes", "Start": "2023-11-07", "Finish": "2023-11-14", "Resource": "Developers"},
    {"Task": "Share prototypes with devs", "Start": "2023-11-07", "Finish": "2023-11-14", "Resource": "Product Manager"},
    {"Task": "Work on prototypes", "Start": "2023-11-07", "Finish": "2023-11-21", "Resource": "Developers"},
    {"Task": "Feedback Integration", "Start": "2023-11-21", "Finish": "2023-11-28", "Resource": "Group"},
    {"Task": "Review feedback", "Start": "2023-11-21", "Finish": "2023-11-21", "Resource": "Project Manager"},
    {"Task": "Create other user scenarios", "Start": "2023-11-21", "Finish": "2023-11-24", "Resource": "Product Manager"},
    {"Task": "Add ROI visualization", "Start": "2023-11-24", "Finish": "2023-11-27", "Resource": "Developers"},
    {"Task": "QA feedback", "Start": "2023-11-28", "Finish": "2023-12-05", "Resource": "QA"},
    {"Task": "Final project preparation", "Start": "2023-11-28", "Finish": "2023-12-05", "Resource": "Project Manager"},
    {"Task": "Finalize Python code", "Start": "2023-11-28", "Finish": "2023-12-05", "Resource": "Developers"}
]

# Define the colors for the tasks based on the responsible group
colors = {
    "Group": "#fbb4ae",
    "Project Manager": "#b3cde3",
    "Developer": "#ccebc5",
    "Product Manager": "#decbe4",
    "QA": "#fed9a6",
    "Developers": "#b3e2cd"
}

# Create the Gantt chart
fig = ff.create_gantt(tasks, colors=colors, index_col="Resource", show_colorbar=True, group_tasks=True)
fig.show()
