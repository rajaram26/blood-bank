package blood.bank.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import blood.bank.model.BB_donars;
import blood.bank.model.BB_sample;
import blood.bank.model.BB_user;
import blood.bank.repo.BloodBankRepo;
import blood.bank.repo.DonarRepo;
import blood.bank.repo.SampleRepo;

@Service
public class BloodBankService {
	
	@Autowired
	BloodBankRepo repo;
	
	@Autowired
	DonarRepo donar;
	
	@Autowired
	SampleRepo sample;
	
	public void saveUser(BB_user bb_user) {
		repo.save(bb_user);
	}
	
	public void saveDonar(BB_donars d) {
		donar.save(d);
	}
	public void saveSample(BB_sample s) {
		sample.save(s);
	}

	public List<BB_user> getAllUser() {
		
		return (List<BB_user>) repo.findAll();
	}

	public List<BB_donars> getAllDonar() {
		return (List<BB_donars>) donar.findAll();
	}

	public List<BB_sample> getAllSample() {
		return (List<BB_sample>) sample.findAll();
	}

	public BB_user getById(String id) {
		return repo.findAllById(id);
	}
	
	public boolean getByEmail(String username,String password) {
		 ArrayList<BB_user> user= repo.getByEmail(username);
		 int size=user.size();
		 if(size==0) {
			 return false;
		 }
		 if(user.get(0).getPassword().equals(password)) {
			 return true;
		 }
		 return false;
	}
	public BB_user getByMail(String username) {
		 ArrayList<BB_user> user= repo.getByEmail(username);
		 return user.get(0);
	}

	public void deleteUser(String id) {
		 repo.deleteById(id);
	}
	
	public List<BB_donars> getDonar(String location,String group) {
		return (List<BB_donars>) donar.findDonar(location,group);
	}

	public List<BB_sample> getSample(String location,String group) {
		return (List<BB_sample>) sample.findSample(location,group);
	}

	public void deleteDonar(String id) {
		donar.deleteById(id);
	}

	public void deleteSample(String id) {
		sample.deleteById(id);
	}

	public BB_donars getDonarById(String id) {
		return donar.findDonarById(id);
	}

	public BB_sample getSampleById(String id) {
		return sample.findSampleById(id);
	}

}
