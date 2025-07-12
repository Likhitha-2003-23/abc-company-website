@Repository
public interface HeadingRepository extends JpaRepository<Heading, Long> {
    Heading findTopByOrderByIdDesc();
}