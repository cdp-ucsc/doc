---
sidebar_position: 4
tags:
    - Placeholder
---

# CDP Workflows

### Workflow Processes - DRAFT

The CDP will challenge the status quo of our typical operations and strive for automation and efficiencies.  

### Project Team Members
All are encouraged to submit ideas for consideration. For now this can be done through the GitHub Project interface.  Future integrations with Asana are being evaluated.


### Managers and Leads 


```mermaid

sequenceDiagram
    participant new as New
    participant backlog as Backlog
    participant ready as Ready


    Note over new,ready: Review, prioritize
    new->>+backlog: After review by managers or leads
    new->>+ready: After review by managers or leads

    Note over ready: GitHub issues created
```



----

### Engineering and Business Teams

```mermaid
sequenceDiagram
    
    participant in-progress as In Progress
    participant in-review as In Review
    participant done as Done


    Note over in-progress,in-review: Pull Request 
    in-progress->>in-review: Work is complete and PR is submitted

    Note over in-review,done: Leads added as Reviewers
    in-review->>done: PR is approved and merged to main

```