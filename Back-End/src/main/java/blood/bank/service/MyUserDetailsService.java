//package blood.bank.service;
//
//import java.util.ArrayList;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//import blood.bank.model.BB_user;
//
//
//public class MyUserDetailsService implements UserDetailsService{
//	
//	@Autowired
//	BloodBankService service;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		BB_user user = service.getByEmail(username);
//		return new User(user.getEmail(),user.getPassword(),new ArrayList<>());
//	}
//	
//	
//
//}
