package com.example.ppis.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.Locale;

@Entity
@Table(name = "request")
public class Request {
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
    @NotEmpty
    private String category;

    @ManyToOne
    @JoinColumn
    private User user;

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

    public Request(@NotEmpty String title, @NotEmpty String description, @NotEmpty String category) {
        this.title = title;
        this.description = description;
        this.created = new Date();
        this.category = category;
    }
    public Request() {}

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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
