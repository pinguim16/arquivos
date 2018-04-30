package www.projetoarquivos.com.br.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import www.projetoarquivos.com.br.domain.Autor;


/**
 * Spring Data JPA repository for the Autor entity.
 */
@Repository
public interface AutorRepository extends JpaRepository<Autor,Long> {
	
	List<Autor> findAllByOrderByNomeAsc();
}
