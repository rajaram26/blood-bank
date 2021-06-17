package blood.bank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import blood.bank.model.BB_donars;
import blood.bank.model.BB_sample;
import blood.bank.model.BB_user;
import blood.bank.service.BloodBankService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BloodBankController {
	
	@Autowired
	private BloodBankService bb_service;
	
	@PostMapping("/api/register")
	public String RegisterUser(@RequestBody BB_user user) {
		bb_service.saveUser(user);
		return "Registered is done successfully";
	}
	
	@PostMapping("/api/save_donar")
	public String saveDonars(@RequestBody BB_donars user) {
		bb_service.saveDonar(user);
		return "Donar details are saved successfully";
	}
	

	@PostMapping("/api/save_sample")
	public String saveSamples(@RequestBody BB_sample user) {
		bb_service.saveSample(user);
		return "Sample details are saved successfully";
	}
	
	@GetMapping("/api/getalluser")
	public List<BB_user> getALLUser(){
		return bb_service.getAllUser();
	}
	
	@GetMapping("/api/getalldonar")
	public List<BB_donars> getALLDonars(){
		return bb_service.getAllDonar();
	}
	
	@GetMapping("/api/getallsample")
	public List<BB_sample> getALLSample(){
		return bb_service.getAllSample();
	}
	
	@GetMapping("/api/getUserById/{id}")
	public BB_user getUserById(@PathVariable(name="id") String id) {
		return bb_service.getById(id);
	}
	 
	@GetMapping("/api/getDonarById/{id}")
	public BB_donars getDonarById(@PathVariable(name="id") String id) {
		return bb_service.getDonarById(id);
	}
	
	@GetMapping("/api/getSampleById/{id}")
	public BB_sample getSampleById(@PathVariable(name="id") String id) {
		return bb_service.getSampleById(id);
	}
	
	@DeleteMapping("/api/deleteUser/{id}")
	public String deleteUser(@PathVariable(name="id") String id) {
		 bb_service.deleteUser(id);
		 return "User Deleted";
	}
	
	@DeleteMapping("/api/deleteDonar/{id}")
	public String deleteDonar(@PathVariable(name="id") String id) {
		 bb_service.deleteDonar(id);
		 return "Donar details Deleted";
	}
	
	@DeleteMapping("/api/deleteSample/{id}")
	public String deleteSample(@PathVariable(name="id") String id) {
		 bb_service.deleteSample(id);
		 return "Sample details Deleted";
	}
	
	@GetMapping("/api/getDonar")
	public List<BB_donars> getDonarDetails(@RequestParam("location") String location,@RequestParam("blood_group") String group){
		 return bb_service.getDonar(location, group);
	}
	
	@GetMapping("/api/getSample")
	public List<BB_sample> getSampleDetails(@RequestParam("location") String location,@RequestParam("blood_group") String group){
		 return bb_service.getSample(location, group);
	}
	
	
	//login check
	@GetMapping("/api/getUser")
	public boolean getUsername(@RequestParam("username") String username,@RequestParam("password") String password){
		boolean result=bb_service.getByEmail(username, password);
		return result;
	}
	
	@GetMapping("/api/getUserByName")
	public BB_user getUsernameByName(@RequestParam("username") String username){
		BB_user result=bb_service.getByMail(username);
		return result;
	}
}
