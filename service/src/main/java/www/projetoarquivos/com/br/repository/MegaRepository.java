package www.projetoarquivos.com.br.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import www.projetoarquivos.com.br.domain.Mega;


/**
 * Spring Data JPA repository for the Mega entity.
 */
@Repository
public interface MegaRepository extends JpaRepository<Mega,Long> {
    
}
