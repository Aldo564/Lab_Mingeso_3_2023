package PythonTest.Backend.Repositories;

import PythonTest.Backend.Entities.PyTestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;

@Repository
public interface PyTestRepository  extends JpaRepository<PyTestEntity, String>{

    @Query("select e from PyTestEntity e")
    ArrayList<PyTestEntity> getAll();

    @Query("select e from PyTestEntity e where e.dificultad = :dif")
    ArrayList<PyTestEntity> findByDif(@Param("dif")Integer dif);

    @Query("select e from PyTestEntity e where e.ID_PYTEST = :id")
    PyTestEntity findById(@Param("id")Integer id);

}
