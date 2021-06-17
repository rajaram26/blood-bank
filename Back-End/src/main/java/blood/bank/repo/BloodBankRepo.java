package blood.bank.repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import blood.bank.model.BB_user;

@Repository
public interface BloodBankRepo extends CrudRepository<BB_user, String> {
	
	
	@Query(value = "select * from bb_user where id=?1",nativeQuery = true)
	BB_user findAllById(String id);
	
	@Query(value = "select * from bb_user where email=?1",nativeQuery = true)
	ArrayList<BB_user> getByEmail(String email);
	

}
