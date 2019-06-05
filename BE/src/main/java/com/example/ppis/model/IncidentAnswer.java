package com.example.ppis.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
@Table(name = "incident_answer")
public class IncidentAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotEmpty
    private String text;

    @Column
    @NotEmpty
    private Date created;

    @ManyToOne
    @JoinColumn
    private User user;

    public IncidentAnswer() {
    }

    public IncidentAnswer(@NotEmpty String text, @NotEmpty Date created) {
        this.text = text;
        this.created = created;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
}
