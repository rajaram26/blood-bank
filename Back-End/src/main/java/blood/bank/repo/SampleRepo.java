package blood.bank.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import blood.bank.model.BB_donars;
import blood.bank.model.BB_sample;

public interface SampleRepo extends CrudRepository<BB_sample, String> {

	@Query(value="select * from bb_sample where location=?1 and blood_group=?2",nativeQuery =true)
	List<BB_sample> findSample(String location, String group);

	@Query(value="select * from bb_sample where id=?1",nativeQuery =true)
	BB_sample findSampleById(String id);
}
