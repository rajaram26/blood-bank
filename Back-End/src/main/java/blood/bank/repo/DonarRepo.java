package blood.bank.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import blood.bank.model.BB_donars;
import blood.bank.model.BB_user;

public interface DonarRepo extends CrudRepository<BB_donars,String> {
	
	
	@Query(value="select * from bb_donars where location=?1 and blood_group=?2",nativeQuery =true)
	List<BB_donars> findDonar(String location, String group);
	
	@Query(value="select * from bb_donars where id=?1",nativeQuery =true)
	BB_donars findDonarById(String id);
	
}
