package com.example.ppis.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "incident")
public class Incident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotEmpty
    private String title;

    @Column
    @NotEmpty
    private String description;

    @Column
    private Date created;

    @Column
    private Date closed_time;

    @Column
    private Date fixed_time;

    @Column
    @NotEmpty
    private String category;

    @ManyToOne
    @JoinColumn
    private ReportMethod reportMethod;

    @ManyToOne
    @JoinColumn
    private Departments departments;

    @ManyToOne
    @JoinColumn
    private ContactMethod contactMethod;

    @ManyToOne
    @JoinColumn
    private Status status;

    @ManyToOne
    @JoinColumn
    private Levels priorityLevel;

    @ManyToOne
    @JoinColumn
    private Levels urgencyLevel;

    @ManyToOne
    @JoinColumn
    private Services services;

    @ManyToOne
    @JoinColumn
    private User userCreator;

    @ManyToOne
    @JoinColumn
    private User userAssignedTo;

    @ManyToMany
    @JoinTable(
            name = "incident_incidentAnswer",
            joinColumns = @JoinColumn(name = "incident_id"),
            inverseJoinColumns = @JoinColumn(name = "incidentAnswer_id")
    )
    private List<IncidentAnswer> incidentAnswers;

    public Incident() {
    }

    public Incident(@NotEmpty String title, @NotEmpty String description, @NotEmpty String category) {
        this.title = title;
        this.description = description;
        this.created = new Date();
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getClosed_time() {
        return closed_time;
    }

    public void setClosed_time(Date closed_time) {
        this.closed_time = closed_time;
    }

    public Date getFixed_time() {
        return fixed_time;
    }

    public void setFixed_time(Date fixed_time) {
        this.fixed_time = fixed_time;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @JsonProperty
    public List<IncidentAnswer> getIncidentAnswers() {
        return incidentAnswers;
    }

    @JsonIgnore
    public void setIncidentAnswers(List<IncidentAnswer> incidentAnswers) {
        this.incidentAnswers = incidentAnswers;
    }

    public void addIncidentAnswer(IncidentAnswer incidentAnswer){
        incidentAnswers.add(incidentAnswer);
    }
    public void addAllIncidentAnswers(List<IncidentAnswer> incidentAnswers){
        this.incidentAnswers.addAll(incidentAnswers);
    }
    public void removeIncidentAnswer(IncidentAnswer incidentAnswer) {
        incidentAnswers.remove(incidentAnswer);
    }
}
