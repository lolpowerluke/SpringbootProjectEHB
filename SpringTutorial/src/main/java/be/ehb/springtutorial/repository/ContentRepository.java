package be.ehb.springtutorial.repository;

import be.ehb.springtutorial.model.Content;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContentRepository extends ListCrudRepository<Content, Integer> {
    List<Content> findAllByTitleContains(String keyword);
    List<Content> findAllByDescContains(String keyword);
    @Query("""
            SELECT * FROM content
            WHERE price BETWEEN :min AND :max
    """)
    List<Content> findAllByPriceBetween(@Param("min") Double min, @Param("max") Double max);
}
