@RestController
@RequestMapping("/api/headings")
@CrossOrigin(origins = "http://localhost:3000")
public class HeadingController {
    @Autowired
    private HeadingRepository headingRepo;

    @GetMapping("/")
    public Heading getLatestHeading() {
        return headingRepo.findTopByOrderByIdDesc();
    }

    @PostMapping("/")
    public Heading saveHeading(@RequestBody Heading heading) {
        return headingRepo.save(heading);
    }
}