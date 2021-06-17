package blood.bank.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bb_sample")
public class BB_sample {
	
	@Id
	private String id;
	private String name;
	private String blood_group;
	private String date; 
	private String location;
	private String mobile;
	
	public BB_sample(String id, String name, String blood_group,String date, String location, String mobile) {
		super();
		this.id = id;
		this.name = name;
		this.blood_group = blood_group;
		this.date = date;
		this.location = location;
		this.mobile = mobile;
	}

	public BB_sample() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	
}
