package blood.bank.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bb_donars")
public class BB_donars {
	
	@Id
	private String id;
	private String name;
	private String blood_group;
	private String location;
	private String mobile;
	
	public BB_donars(String id, String name, String blood_group, String location, String mobile) {
		super();
		this.id = id;
		this.name = name;
		this.blood_group = blood_group;
		this.location = location;
		this.mobile = mobile;
	}

	public BB_donars() {
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
	
	
	
}
